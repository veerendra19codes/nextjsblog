export const authConfig = {
    //if authorized fn fails i.e. returns false , it will redirect user to below pages
    pages: {
        signIn: "/login",
    },
    //we donot need to provide any providers bcoz we already did it in auth.js , this empty array will be overriden by auth.js
    providers: [],
    callbacks: {
        // async jwt({token, user}),
        // async session({session,token})
        authorized({ auth, request }) {
            console.log(auth);
            return true;
        },
    },
};