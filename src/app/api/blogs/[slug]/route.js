import { NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/connectToDB.js"
import { Post } from "../../../../lib/models"

export const GET = async (request, {params}) => {

    const {slug} = params;

    try {
        connectToDB();

        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    }
    catch(err) {
        console.error(err);
        console.log("failed to get a blog from db");
    }
}

export const DELETE = async (request, {params}) => {

    const {slug} = params;

    try {
        connectToDB();

        await Post.deleteOne({slug});
        return NextResponse.json("Post deleted from db");
    }
    catch(err) {
        console.error(err);
        console.log("failed to delete blog from db");
    }
}