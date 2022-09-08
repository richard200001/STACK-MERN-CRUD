/**
 * @module server
 */
import express from 'express'
import fileUpload from 'express-fileupload';
import postsRoutes from './routes/posts.routes.js'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url';
/**
 * Aquí iniciamos nuestro servidor
 * @type {Object}
 */
const app = express();
const __dirname= dirname(fileURLToPath(import.meta.url))
//Middlewares
app.use(express.json())//para poder leer archivos json
app.use(fileUpload({
    useTempFiles:true,//le digo que no lo mantenga en memoria, sino que lo guarde en una carpeta 
    tempFileDir:'./upload'//le digo que lo guarde en esa carpeta, si la carpeta no existe, la crea
}))
//Routes
app.use(postsRoutes);
app.use(express.static(join(__dirname, '../client/build')))
app.get('*', (req,res) => {
    res.sendFile(join(__dirname, '../client/build/index.html'))
})

export default app