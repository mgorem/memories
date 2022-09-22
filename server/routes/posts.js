import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

// initialize express router
const router = express.Router();

// set as localhost:5000/posts in the index.js
router.get("/", getPosts);
router.post("/", createPost);

export default router;
