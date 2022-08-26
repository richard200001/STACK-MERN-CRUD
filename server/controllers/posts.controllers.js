/**
 * @module postControllers
 */
/**
 * Obtengo los datos
 * @param {*} req 
 * @param {*} res 
 * @returns {Array}
 */
export const getPosts =(req,res) => res.send([]);
/**
 * creo los datos
 * @param {*} req 
 * @param {*} res 
 * @returns {string}
 */
export const createPost = (req,res) => res.send('New post create');
/**
 * Actualizo los datos
 * @param {*} req 
 * @param {*} res 
 * @returns {string}
 */
export const updatePost = (req,res) => res.send('Updating a post');
/**
 * elimino datos
 * @param {*} req 
 * @param {*} res 
 * @returns {string}
 */
export const deletePost = (req,res) => res.send('Deleting a post');
/**
 * obtengo un dato en específico
 * @param {*} req 
 * @param {*} res 
 * @returns {string}
 */
export const getPost = (req,res) => res.send('Geting a post');