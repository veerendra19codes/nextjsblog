//if we use auth function in middleware , it will not work bcoz auth fn uses nodejs packages like bcrypt and connection from mongoose and Nextjs middleware likes to work independently

import NextAuth from "next-auth"
import { authConfig } from "./lib/auth.config"

export default NextAuth(authConfig).auth;

export const config = {
    //this are the files where middleware will not work
    matcher: ['/((?!api|static|.*\\..*|_next).*)'],
}

