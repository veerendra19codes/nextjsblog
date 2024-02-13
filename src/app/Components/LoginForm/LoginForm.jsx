"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { loginAction } from '../../../lib/actions'
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { logInWithGithub } from '../../../lib/actions'


const LoginForm = () => {

    const [state, formAction] = useFormState(loginAction, undefined);

    const router = useRouter();

    // useEffect(() => {

    //     if (state?.success) {
    //         router.push("/login")
    //     }
    // }, [router, state?.success]);

    return (
        // <div className="w-auto bg-slate-800 h-auto flex flex-col justify-center items-center">
        <form action={formAction} className="w-auto bg-slate-800 h-auto p-12 flex flex-col justify-center items-center gap-8">
            <input type="text" placeholder="username" name="username" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
            <input type="text" placeholder="password" name="password" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
            <button type="submit" className="bg-blue-700 p-4 rounded-lg" >Login</button>
            {state?.error && <p>{state?.error}</p>}
            <Link href="/register">Don't have and account? <b>Register</b></Link>
        </form>
        // < form action={logInWithGithub} className="w-auto bg-slate-800 h-auto p-12 pt-0 flex justify-center items-center" >
        //     <button className="bg-blue-700 p-4 rounded-lg">Login with Github</button>
        // </form >
        // </div>
    )
}

export default LoginForm
