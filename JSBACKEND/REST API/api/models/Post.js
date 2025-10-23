import { Schema, model } from "mongoose"

const postSchema = new Schema({
    title: String,
    content: String,
}, { timestamps: true });

const Post = model('Post', postSchema);

export default Post;