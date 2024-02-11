import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max:50
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    img: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    userId: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

//if db already has User/Post model , it will use that or create a new one
export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema)
