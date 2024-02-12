//FETCHING DATA WITHOUT AN API I.E FETCHING FROM A SEPERATING FOLDER INSIDE PROJECT
// const posts = [
//     {
//         "id": 1,
//         "title": "ubfweif",
//         "body": "lorem10k lrbbfwei f uihvihfue rhfu  hqriuv hwgurh",
//         "userId": 1,
//     },
//     {
//         "id": 2,
//         "title": "ubrkvgouhreif",
//         "body": "lorem10k lrbbfwei f uihvihfue rhfu delifhbg g;qwiug;t.vbetuiiruhgovclrqehbb  p hqriuv hwgurh",
//          "userId": 2,
//     },{
//         "id": 3,
//         "title": "ubruviweif",
//         "body": "lorem10k lrbbfwei f uihvihfue rhoiwfejbiugfbwrffu  hqriuv hwgurh",
//          "userId": 3,
//     }
// ];

// const users = [
//     {
//         userId: 1,
//         username: "tony",
//     },
//     {
//         userId: 2,
//         username: "geaogre"
//     }
// ];

import {Post, User} from "../lib/models"
import {connectToDB} from "../lib/connectToDB"
import { unstable_noStore as noStore } from 'next/cache';

export const getPosts = async () => {
    try{
        connectToDB();
        const posts = Post.find();
        return posts;
    }
    catch(err) {
        console.log(err);
        throw new Error("failed to fetch posts");
    }
}

export const getPost = async (slug) => {
   try{
        connectToDB();

        const post = Post.findOne({slug});
        return post;
    }
    catch(err) {
        console.log(err);
        throw new Error("failed to fetch post");
    }
}

export const getUsers = async () => {
    try{
        connectToDB();

        const users = User.find();
        return users;
    }
    catch(err) {
        console.log(err);
        throw new Error("failed to fetch users");
    }
}

export const getUser = async (userId) => {
    noStore();
   try{
        connectToDB();

        const user = User.findById(userId);
        return user;
    }
    catch(err) {
        console.log(err);
        throw new Error("failed to fetch user");
    }
}