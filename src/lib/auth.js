import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { connectToDB } from "./connectToDB"
import { User } from "./models";

export const { handlers: {GET, POST}, auth, signIn, signOut} = NextAuth({ providers: [
    Github({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    }),
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
    }
})

