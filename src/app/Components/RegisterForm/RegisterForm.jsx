"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { registerAction } from '../../../lib/actions'
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {

    const [state, formAction] = useFormState(registerAction, undefined);

    const router = useRouter();

    useEffect(() => {

        if (state?.success) {
            router.push("/login")
        }
    }, [router, state?.success]);

    return (
        <form action={formAction} className="w-auto bg-slate-800 h-auto p-12 flex flex-col justify-center items-center gap-8">
            <input type="text" placeholder="username" name="username" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
            <input type="email" placeholder="email" name="email" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
            <input type="text" placeholder="password" name="password" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
            <input type="text" placeholder="confirm password" name="confirmPassword" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
            <button type="submit" className="bg-blue-700 p-4 rounded-lg" >Submit</button>
            {state?.error && <p>{state?.error}</p>}
            <Link href="/login">User already exists? <b>Login</b></Link>
        </form>
    )
}

export default RegisterForm
