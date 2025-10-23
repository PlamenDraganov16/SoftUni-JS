import { Router } from "express"
import Post from "../models/Post.js";

const postController = Router();

//Get posts
postController.get('/', async (req, res) => {
    const posts = await Post.find();

    res.json(posts).status(200);
});

//Create post
postController.post('/', async (req, res) => {
    const data = req.body;

    const createdPost = await Post.create(data);

    res.status(201).json(createdPost);
});

//Get post details
postController.get('/:postId', async (req, res) => {
    const postId = req.params.postId;

    const post = await Post.findById(postId);

    if (!post) {
        return res.status(404).end();
    }

    res.json(post);
});

//Edit post
postController.put('/:postId', async (req, res) => {
    const postId = req.params.postId;
    const postData = req.body;

    const updatedPost = await Post.findByIdAndUpdate(postId, postData);

    res.json(updatedPost);
});

//Delete post
postController.delete('/:postId', async (req, res) => {
    const postId = req.params.postId;

    await Post.findByIdAndDelete(postId);

    res.status(204);
})

export default postController;