import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import { connectToDB } from "./connectToDB"
import { User } from "./models";
import { authConfig } from "./auth.config"

const login = async (credentials) => {
    try {
        connectToDB();

        const user = await User.findOne({username: credentials.username});

        if(!user) {
            // throw new Error("No user found(username wrong)(/lib/actions");
            console.log("error in login function in /lib/auth")
            return { error: "Wrong username or password"}
        }

        const isPasswordCorrect =  await bcrypt.compare(credentials.password, user.password);

        if( !isPasswordCorrect) {
            // throw new Error("Wrong password entered");
            console.log("wrong password")
        }

        return user;
    }
    catch(err) {
        console.log(err);
        console.log("failed to login using creds in /lib/actions")
        // throw new Error("failed to login using creds in /lib/actions");
    }
}


export const { 
    handlers: {GET, POST}, 
    auth, 
    signIn, 
    signOut
} = NextAuth({ ...authConfig, providers: [
    Github({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
        async authorize(credentials){
            try {
                const user = await login(credentials);
                return user;
            }
            catch (err) {
                return null;
            }
        }
    })
],
    callbacks: {
    async signIn({user, account, profile}) {
            if( account.provider === "github") {
                connectToDB();
                try {
                    const user = await User.findOne({email: profile.name});

                    if(!user)  {
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url,
                        });

                        await newUser.save();
                    }
                }
                catch(err) {
                    console.error(err);
                    throw new Error("Error getting github user in db");
                    return false;
                }
            }
            return true;
        },
        //auth authConfig.callbacks will be overridden by above configs, to add them to main configs above-
        ...authConfig.callbacks,
    }
})

