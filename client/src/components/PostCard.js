import React from "react"
import toast from 'react-hot-toast'//envía notificaciones
import { usePost } from "../context/postContext"
export function PostCard({post}){

    const {deletePost} = usePost()

    const hadleDelete = (id) => {
        toast((t) => (
            <div>
                <p className="text-white">Do you want to delelete<strong>{id}</strong>?</p>
                <div>
                    <button className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2" onClick={() => deletePost(id)}>Delete</button>

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
        <div className="bg-zinc-800 text-white rounded-md shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer">
           <div className="px-4 py-7">
                <div className="flex justify-between">
                    <h3>{post.title}</h3>
                    <button className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2" onClick={() => hadleDelete(post._id)}>Delete</button>
                </div>
                <p>{post.description}</p>
                
           </div>
        </div>
    )
}