/**
 * @module server
 */
import express from 'express'
import fileUpload from 'express-fileupload';
import postsRoutes from './routes/posts.routes.js'
/**
 * Aquí iniciamos nuestro servidor
 * @type {Object}
 */
const app = express();
//Middlewares
app.use(express.json())//para poder leer archivos json
app.use(fileUpload({
    useTempFiles:true,//le digo que no lo mantenga en memoria, sino que lo guarde en una carpeta 
    tempFileDir:'./upload'//le digo que lo guarde en esa carpeta, si la carpeta no existe, la crea
}))
//Routes
app.use(postsRoutes);

export default app