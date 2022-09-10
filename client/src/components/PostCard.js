/**
 * Regresa al tutorial {@tutorial first-tutorial}
 * @module client/src/components/PostCard
 */
import React from "react"
import toast from 'react-hot-toast'//envía notificaciones
import { usePost } from "../context/postContext"
import { useNavigate } from "react-router-dom"
/**
 * Eliminando tarjeta
 * @param {Object} param0 
 * @returns {Object}
 */
export function PostCard({post}){

    const {deletePost} = usePost()
    const navigate = useNavigate()
    

    const hadleDelete = (id) => {
        toast((t) => (
            <div>
                <p className="text-white">Do you want to delelete<strong>{id}</strong>?</p>
                <div>
                    <button className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2" onClick={() => {
                        deletePost(id)
                        toast.dismiss(t.id)
                        }
                        }>Delete</button>

                    <button className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2" onClick={() => toast.dismiss(t.id)}>Cancel</button>
                </div>
            </div>
        ),
        {
          style: {
            background: "#202020"
          }
        }
        )
    }
    return (
        <div className="bg-zinc-800 text-white rounded-lg shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer"
        onClick={() => navigate(`/posts/${post._id}`)}
        >
           <div className="px-4 py-7">
                <div className="flex justify-between">
                    <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                    <button className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2" onClick={(e) => { e.stopPropagation(); hadleDelete(post._id)}
                }>Delete</button>
                </div>
                <p>{post.description}</p>
                </div>
                
                {post.image && <img src={post.image.url} className="w-full object-cover"/>}
           
        </div>
        
    )
}