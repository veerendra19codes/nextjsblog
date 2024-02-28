"use client";

import { addUser } from "../../../lib/actions";
// import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
    const [state, formAction] = useFormState(addUser, undefined);

    return (
        <div className="flex justify-center items-center w-1/2 h-auto px-20">
            <form action={formAction} className="flex flex-col justify-center items-center gap-6 w-full h-full bg-slate-800 py-6">
                <h1>Add New User</h1>
                <input type="text" name="username" placeholder="username" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                <input type="text" name="email" placeholder="email" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                <input type="password" name="password" placeholder="password" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                <input type="text" name="img" placeholder="img" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                <select name="isAdmin" className="bg-slate-600 px-4 py-2">
                    <option value="false">Is Admin?</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
                <button className="bg-blue-500 rounded-lg py-2 px-4">Add</button>
                {state?.error}
            </form>
        </div>
    );
};

export default AdminUserForm;