/**
 * @module server
 */
import express from 'express'
import postsRoutes from './routes/posts.routes.js'
/**
 * Aquí iniciamos nuestro servidor
 * @type {Object}
 */
const app = express();
//Middlewares
app.use(express.json())//para poder leer archivos json

//Routes
app.use(postsRoutes);

export default app