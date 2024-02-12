import { NextResponse } from "next/server";
import { connectToDB } from "../../../lib/connectToDB.js"
import { Post } from "../../../lib/models"

export const GET = async (request) => {
    try {
        connectToDB();
        const posts = await Post.find();
        return NextResponse.json(posts);
    }
    catch(err) {
        console.error(err);
        console.log("failed to get all blogs from db");
    }
}