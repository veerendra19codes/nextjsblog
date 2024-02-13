"use server"

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Post, User } from "./models";
import { signIn, signOut } from "../lib/auth"
import { connect } from "mongoose";
import bcrypt from "bcryptjs";


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

export const registerAction = async (previousState, formData) => {
    const {username, email, password, confirmPassword} = Object.fromEntries(formData);

    // console.log(formData);

    if( password !== confirmPassword) {
        // throw new Error("Passwords do not match");
        console.log("Passwords do not match")
        return {error: "passwords do not match"};
    }

    try {
        connectToDB();
    
        const user = await User.findOne({username});

        if(user) {
            return  {error: "Username already exists" };
        }

        const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);
// Store hash in your password DB.

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
        })

        // console.log(newUser);

        await newUser.save();
        console.log("User registered successfully");
        //success is boolean because if success is true we can redirect user to home/login page
        return {success: true};

    }
    catch(err) {
        console.error(err);
        // throw new Error("failed registering using user creds");
        console.log("failed registering using user creds");
        return { error: "failed registering using user creds"}
    }

}

export const loginAction = async (previousState,formData) => {
    const {username, password} = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password});

    }
    catch(err) {
        console.error(err);
        // throw new Error("failed registering using user creds");
        if(err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password"};
        }
        console.log("failed registering using user creds")
        // return { error: "failed registering using user creds"}
        throw err;
    }

}
