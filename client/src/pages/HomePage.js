/**
 * Regresa al tutorial {@tutorial first-tutorial}
 * @module client/src/pages/HomePage
 */
import React from 'react'
import {usePost} from '../context/postContext'
import {VscEmptyWindow} from 'react-icons/vsc'
import {Link} from 'react-router-dom'
import { PostCard } from '../components/PostCard'
/**
 * Page Main
 * @returns {Object}
 */
export function HomePage(){
    const {posts} = usePost()
    
   
    const renderMain = () => {
      if(posts.length === 0)return(
        <div className='flex flex-col justify-center items-center'>
          <VscEmptyWindow className='w-48 h-48 text-white'/>
          <h1 className='text-white text-2xl'>There are not posts</h1>
        </div>
      )

      return (<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 mb-10'>
      {posts.map(post => (
          <PostCard post={post} key={post._id}/>
      ))}
      
    </div>)
    }

    return(
      <div className="text-white">
        <header className='flex justify-between py-4'>
        <h1 className="text-2xl text-gray-300 font-bold">Posts ({posts.length})</h1>
        <Link className="bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500" to={"/new"}>Create New Post</Link>
        </header>
        
        {renderMain()}
      </div>
    )
  }

