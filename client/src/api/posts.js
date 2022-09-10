/**
 * Regresa al tutorial {@tutorial first-tutorial}
 * @module client/src/api/posts
 */
import axios from 'axios'
/**
 * Obtiene los post de la base de datos
 * @returns {Promise} respuesta del backend
 */
export const getPostRequest = async() => await axios.get('/posts')
/**
 * Crea un post
 * @param {Object} post objeto obtenido del front-end para enviar al back-end
 * @returns {Promise} respuesta del backend
 */
export const createPostRequest = async (post) => {
    const form = new FormData()
    for(let key in post){
        form.append(key, post[key]);
    }
    
    return await axios.post('/posts', form,{
        headers:{
            "Content-Type": "multipart/form-data"
        }
    });
}
/**
 * Elimina un post
 * @param {number} id id del post
 * @returns {Promise} respuesta del backend
 */
export const deletePostRequest = async (id) => await axios.delete('/posts/' + id);
/**
 * Obtiene un post en específico de la base de datos
 * @param {number} id id del post
 * @returns {Promise} respuesta del backend
 */
export const getPostReques = async (id) => await axios.get('/posts/' + id)
/**
 * Actualización del post
 * @param {number} id id de la publicación post
 * @param {Object} newFields nuevos datos de la publicación
 * @returns {Promise} respuesta del backend
 */
export const updatePostRequest = async (id, newFields) => await axios.put(`/posts/${id}`, newFields)