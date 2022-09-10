/**
 * Regresa al tutorial {@tutorial first-tutorial}
 * @module server/routes
 */
import { Router } from "express"
import { createPost, deletePost, getPost, getPosts, updatePost } from "../controllers/posts.controllers.js";

const router = Router()
/**
 * Index Route
 * @name index
 * @path {GET} /
 * @chain {@link module:server/postControllers.getPosts}
 * @chain This handler
 */
router.get('/posts', getPosts );
/**
 * Index Route
 * @name create
 * @path {POST} /
 * @chain {@link module:server/postControllers.createPost}
 * @chain This handler
 */
router.post('/posts', createPost );
/**
 * Index Route
 * @name update
 * @path {POST} /
 * @chain {@link module:server/postControllers.updatePost}
 * @chain This handler
 */
router.put('/posts/:id', updatePost );
/**
 * Index Route
 * @name delete
 * @path {DELETE} /
 * @chain {@link module:server/postControllers.deletePost}
 * @chain This handler
 */
router.delete('/posts/:id', deletePost );
/**
 * Index Route
 * @name indexEspecific
 * @path {GET} /
 * @chain {@link module:server/postControllers.getPost}
 * @chain This handler
 */
router.get('/posts/:id', getPost);

export default router