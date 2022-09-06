import React from 'react'
import {useState, createContext, useContext, useEffect} from 'react'
import {createPostRequest, deletePostRequest, getPostRequest} from '../api/posts'

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
        //console.log({postcontext: post})
        const res = await createPostRequest(post)
        //hago una copia de post y le añado la nueva información
        setPosts([...posts, res.data])
    }
    const deletePost = async (id) => {
        const res = await deletePostRequest(id);
        console.log(res)
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
    }}>
     {children}
    </postContext.Provider>
}