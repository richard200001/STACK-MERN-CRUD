/**
 * @module server/postControllers
 */
import Post from "../models/Post.js";
/**
 * @code {200} if the request is successful
 * @code {500} if the request fail because the database isn't accesible 
 * @response {Array} response respuesta asíncrona obteniendo datos
 */
export const getPosts =async (req,res) => {
   const posts = await Post.find()
    res.send(posts)
}
/**
 * creo los datos
 * @param {any} req data 
 * @param {any} res response
 * @code {200} if the request is successful
 * @code {500} if the request fail because the database isn't accesible 
 * @response {Object} response respuesta asíncrona creando datos
 */
export const createPost = (req,res) => {
    console.log(req.body)
    res.send('received');
}
/**
 * Actualizo los datos
 * @param {any} req data 
 * @param {any} res response
 * @code {200} if the request is successful
 * @code {500} if the request fail because the database isn't accesible 
 * @response {Object} response respuesta asíncrona actualizando datos
 */
export const updatePost = (req,res) => res.send('Updating a post');
/**
 * elimino datos
 * @param {any} req data 
 * @param {any} res response
 * @code {200} if the request is successful
 * @code {500} if the request fail because the database isn't accesible 
 * @response {Object} response respuesta asíncrona eliminando datos
 */
export const deletePost = (req,res) => res.send('Deleting a post');
/**
 * obtengo un dato en específico
 * @param {any} req data 
 * @param {any} res response
 * @code {200} if the request is successful
 * @code {500} if the request fail because the database isn't accesible 
 * @response {Object} response respuesta asíncrona obteniendo dato específico
 */
export const getPost = (req,res) => res.send('Geting a post');