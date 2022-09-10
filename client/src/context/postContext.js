/**
 * Regresa al tutorial {@tutorial first-tutorial}
 * @module client/src/context/postContext
 */
import { Axios } from 'axios'
import React from 'react'
import {useState, createContext, useContext, useEffect} from 'react'
import {createPostRequest, deletePostRequest, getPostReques, getPostRequest, updatePostRequest} from '../api/posts'
/**
 * la forma de pasar datos que pueden considerarse globales a un árbol de componentes 
 * @type {React.Context}
 */
const postContext = createContext()

/**
 * retorno el contexto
 * @returns {context}
 */
export const usePost = () => {
    const context = useContext(postContext)
    return context
}

/**
 * permite que los componentes que lo consumen se suscriban a los cambios del contexto.
 * @param {*} param0 
 * @returns {Object}
 */
export const PostProvider = ({children}) => {
    
    const [posts, setPosts] = useState([])
    const getPosts = async() => {
       const res = await getPostRequest()
      
       setPosts(res.data)
    }

    /**
     * 
     * @param {Object} post 
     */
    const createPost = async (post) => {
        try {
            //console.log({postcontext: post})
            const res = await createPostRequest(post)
            //hago una copia de post y le añado la nueva información
            setPosts([...posts, res.data])
        } catch (error) {
            console.log(error)
        }
        
    }
    /**
     * 
     * @param {number} id 
     */
    const deletePost = async (id) => {
        const res = await deletePostRequest(id);
        if(res.status===204){
            setPosts(posts.filter((post) => post._id !== id))
        }
       
    }
    /**
     * 
     * @param {number} id 
     * @returns {Promise}
     */
    const getPost = async (id) => {
       
          const res = await getPostReques(id);
          return res.data
       
      };
    /**
     * 
     * @param {number} id 
     * @param {Object} post 
     */
    const updatePost = async (id, post) => {
        const res = await updatePostRequest(id,post)
        setPosts(posts.map((post) => (post._id === id ? res.data : post)));
    }

     //con el useEffect le digo que cuando cargue el componente, ejecute el getPosts
    useEffect(() => {
        getPosts()
    },[]);
    return <postContext.Provider value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost
    }}>
     {children}
    </postContext.Provider>
}