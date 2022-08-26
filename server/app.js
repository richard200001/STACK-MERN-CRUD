import express from 'express'
import postsRoutes from './routes/posts.routes.js'
/**
 * Aquí iniciamos nuestro servidor
 */
const app = express();
app.use(postsRoutes);
export default app