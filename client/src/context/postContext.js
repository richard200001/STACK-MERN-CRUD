import React from 'react'
import {useState, createContext, useContext, useEffect} from 'react'
import {createPostRequest, deletePostRequest, getPostReques, getPostRequest, updatePostRequest} from '../api/posts'

const postContext = createContext()

export const usePost = () => {
    const context = useContext(postContext)
    return context
}

export const PostProvider = ({children}) => {
    
    const [posts, setPosts] = useState([])
    const getPosts = async() => {
       const res = await getPostRequest()
      
       setPosts(res.data)
    }

    
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
    const deletePost = async (id) => {
        const res = await deletePostRequest(id);
        if(res.status===204){
            setPosts(posts.filter((post) => post._id !== id))
        }
       
    }

    const getPost = async (id) => {
       
          const res = await getPostReques(id);
          return res.data
       
      };
    
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