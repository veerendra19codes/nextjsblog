"use server"

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Post } from "./models";
import { signIn, signOut } from "../lib/auth"

export const addPost = async (formData) => {

    const { title, desc, slug, userId} = Object.fromEntries(formData);

    // console.log(title);
    // console.log(desc);
    // console.log(slug);
    // console.log(userId);

    try {
        connectToDB();

        //this is new model Post , import it
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        })

        await newPost.save();
        console.log("new post added to db")
        //whenever a new blog is added route and nest routes of blog will show fresh data
        revalidatePath("/blog")
    }
    catch(err) {
        console.error(err);
        return { error: "error in adding post"}
    }

}

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Post.findByIdAndDelete(id);
        console.log("post deleted");
        revalidatePath("/blog");
    }
    catch(err) {
        console.error(err);
        return { error: "error in deleting post"}
    }
}

export const logInWithGithub = async () => {
    "use server"

    await signIn("github")
}

export const logOutWithGithub = async () => {
    "use server"

    await signOut()
}