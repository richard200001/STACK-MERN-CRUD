/**
 * @module routes
 */
import { Router } from "express"
import { createPost, deletePost, getPost, getPosts, updatePost } from "../controllers/posts.controllers.js";

const router = Router()
/**
 * Index Route
 * @name index
 * @path {GET} /
 */
router.get('/posts', getPosts );
/**
 * Index Route
 * @name create
 * @path {POST} /
 */
router.post('/posts', createPost );
/**
 * Index Route
 * @name update
 * @path {POST} /
 */
router.put('/posts', updatePost );
/**
 * Index Route
 * @name delete
 * @path {DELETE} /
 */
router.delete('/posts', deletePost );
/**
 * Index Route
 * @name indexEspecific
 * @path {GET} /
 */
router.get('/posts/:id', getPost);

export default router