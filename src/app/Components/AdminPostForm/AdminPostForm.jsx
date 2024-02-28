"use client"

import { addPost } from "../../../lib/actions";
// import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
    const [state, formAction] = useFormState(addPost, undefined);

    return (
        <div className="flex justify-center items-center w-1/2 h-auto px-20">
            <form action={formAction} className="flex flex-col justify-center items-center gap-6 w-full h-full bg-slate-800 py-6">
                <h1>Add New Post</h1>
                <input type="hidden" name="userId" value={userId} className="bg-bgDark p-4 border-none outline-none focus:outline-white w-auto" />
                <input type="text" name="title" placeholder="Title" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                <input type="text" name="slug" placeholder="slug" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                <input type="text" name="img" placeholder="img" className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                <textarea type="text" name="desc" placeholder="desc" rows={5} className="bg-bgDark p-4 border-none outline-none focus:outline-white" />
                <button className="bg-blue-500 rounded-lg py-2 px-4">Add New Post</button>
                {state?.error}
            </form>
        </div>
    );
};

export default AdminPostForm;