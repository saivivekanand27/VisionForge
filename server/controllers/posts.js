import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../models/post.js";
import createError from "../error.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all posts
export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ success: true, data: posts });
  } catch (err) {
    next(createError(err.status, err.message));
  }
};

// Create a post
export const createPost = async (req, res, next) => {
  try {
    const { name, prompt, photo } = req.body;

    const result = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: result.secure_url,
    });

    return res.status(201).json({ success: true, data: newPost });
  } catch (err) {
    next(createError(err.status, err.message));
  }
};
