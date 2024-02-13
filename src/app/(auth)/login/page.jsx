import React from 'react'
// import { loginAction } from '../../../lib/actions'
import { logInWithGithub } from '../../../lib/actions'
import LoginForm from '../../Components/LoginForm/LoginForm'


const LoginPage = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-auto bg-slate-800 h-auto flex flex-col justify-center items-center">
                < form action={logInWithGithub} className="w-auto bg-slate-800 h-auto pt-12 flex justify-center items-center" >
                    <button className="bg-white text-black p-4 rounded-lg">Login with Github</button>
                </form >

                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage



