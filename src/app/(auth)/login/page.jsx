import React from 'react'
import { signIn, auth } from '../../../lib/auth'
import { logInWithGithub } from "../../../lib/actions"


const LoginPage = async () => {
    // const session = await auth();
    // console.log(session);
    // const loginInWithGithub = async () => {
    //     "use server"

    //     await signIn("github")
    // }
    return (
        <div>
            <form action={logInWithGithub}>
                <button>Login with Github</button>
            </form>
        </div>
    )
}

export default LoginPage
