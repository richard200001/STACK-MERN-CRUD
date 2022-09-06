/**
 * @module server/postControllers
 */
import Post from "../models/Post.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from 'fs-extra'//fs-extra utiliza async await
/**
 * obtengo datos
 * @code {200} if the request is successful
 * @code {500} if the request fail because the database isn't accesible 
 * @response {Array} response respuesta asíncrona obteniendo datos
 * @async
 */
export const getPosts =async (req,res) => {
    try {
        /**
         * obtiene todos los post
         * @type {Object}
         */
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {
        console.error(error.message)
        //si existe un error, simplemete mando un código de estado 500 y un mensaje json que dice error
        return res.status(500).json({message: error.message})
    }
}
/**
 * creo los datos
 * @code {200} if the request is successful
 * @code {500} if the request fail because the database isn't accesible 
 * @response {Object} response respuesta asíncrona creando datos
 * @async
 */
export const createPost = async (req,res) => {
    try {
        /**
         * constantes title and description
         * @type {any}
         */
        const {title, description} = req.body//obtengo el título y la descripción en constantes
        let image;
        if(req.files?.image){//le pregunto si existe ese archivo
            const results = await uploadImage(req.files.image.tempFilePath)//aquí subo la imagen a cloudinary, da como resultado los datos que genera la subida
            await fs.remove(req.files.image.tempFilePath)
            image={
                url: results.secure_url,
                public_id: results.public_id
            }
           
        }
        const newPost = new Post({title,description, image})//creo un nuevo post con el modelo
        await newPost.save()//guardo el nuevo post en la base de datos
        return res.json(newPost);//retorno en formato json objeto 
    } catch (error) {
        console.error(error.message)
        //si existe un error, simplemete mando un código de estado 500 y un mensaje json que dice error
        return res.status(500).json({message: error.message})
    }
    
}
/**
 * Actualizo los datos
 * @code {200} if the request is successful
 * @code {500} if the request fail because the database isn't accesible 
 * @response {string} response respuesta asíncrona actualizando datos
 * @async
 */
export const updatePost = async (req,res) => {
    try {
        /**
         * actualizo post
         * @type {Object}
         */
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true})//el new:true es para que traiga el valor del valor actualizado, req.params trae el id de la url
        console.log(updatePost)
        return res.send(updatePost)
    } catch (error) {
        console.error(error.message)
        //si existe un error, simplemete mando un código de estado 500 y un mensaje json que dice error
        return res.status(500).json({message: error.message})
    }
    
}
/**
 * elimino datos
 * @code {200} if the request is successful
 * @code {500} if the request fail because the database isn't accesible 
 * @response {Object} response respuesta asíncrona eliminando datos
 * @async
 */
export const deletePost = async (req,res) => {
    try {
        /**
         * Nos devuelve el objeto post que eliminamos
         * @type {Object}
         */
        const postRemoved = await Post.findByIdAndDelete(req.params.id);
        console.log(postRemoved)
        //si no encuentra el id del post que quiere eliminar, que envíe al cliente/usuario un código de estado 404
        if(!postRemoved) return res.sendStatus(404)

        if(postRemoved.image.public_id){//le pregunto si existe es propiedad
           await deleteImage(postRemoved.image.public_id)//llamo a la función de eliminar imagen de cloudinary y le paso el id que quiero eliminar
        }

        //si encuentra el id del post que quiere eliminar,que envíe al cliente/usuario un código de estado 202
        return res.sendStatus(204)
    } catch (error) {
        console.error(error.message)
        //si existe un error, simplemete mando un código de estado 500 y un mensaje json que dice error
        return res.status(500).json({message: error.message})
    }
    
}
/**
 * obtengo un dato en específico
 * @code {200} if the request is successful
 * @code {500} if the request fail because the database isn't accesible 
 * @response {Object} response respuesta asíncrona obteniendo dato específico
 * @async
 */
export const getPost = async(req,res) => {
    try {
        /**
         * @type {Object}
         */
        const post = await Post.findById(req.params.id)
        //si no encuentra el id del post que quiere ver, que envíe al cliente/usuario un código de estado 404
        if(!post) return res.sendStatus(404)
        //si encuentra el id del post que quiere ver,que envíe al cliente/usuario el post
        return res.json(post)
    } catch (error) {
        console.error(error.message)
        //si existe un error, simplemete mando un código de estado 500 y un mensaje json que dice error
        return res.status(500).json({message: error.message})
    }
    
}