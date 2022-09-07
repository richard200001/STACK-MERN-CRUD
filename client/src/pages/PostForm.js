import React, { useEffect, useState } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { usePost } from '../context/postContext'
import {useNavigate, useParams, Link} from 'react-router-dom'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as Yup from 'yup'

export function PostForm(){
   const {createPost, getPost, updatePost} = usePost()
   const navigate = useNavigate()
   const params = useParams()
   const [post, setPost] = useState({
     title:'',
     description:'',
     image:null
   })
   
   useEffect( () => {
      (async () =>{
        if(params.id){
          const post = await getPost(params.id)
          setPost(post)
         }
      })();
   },[params.id]);

    return(
      <div className="flex items-center justify-center">
       <div className="bg-zinc-800 p-10 shadow-md shadow-black">
       <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">New Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            Go Back
          </Link>
        </header>
       <Formik // le digo que de valores iniciales en las claves esté vacio
        initialValues={post}
        //le digo que valide lo siguiente
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required")
          })}
          //cuando se ejecute el evento creará el post y nos redireccionará a la página principal
          onSubmit={async (values, actions) => {
            console.log(values)
           if(params.id){
              await updatePost(params.id, values)
            }else{
              await createPost(values) ;
            }
            actions.setSubmitting(false);
         navigate('/')
        }}
        enableReinitialize>
           {({handleSubmit, setFieldValue, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <label htmlFor='title'  className="text-sm block font-bold mb-2 text-gray-400">Title</label>
              <Field name="title" className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4" placeholder="title"/>
              <ErrorMessage component="p" className='text-red-400 text-sm' name='title'/>
              <label htmlFor='description'  className="text-sm block font-bold mb-2 text-gray-400">Description</label>
              <Field component='textarea' name="description" className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" rows={3} placeholder="description"/>
              <ErrorMessage component="p" className='text-red-400 text-sm' name='description'/>
              <label
                htmlFor="image"
                className="text-sm block font-bold mb-2 text-gray-400"
              >
                Image
              </label>
              <input
                type="file"
                name="image"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
              />
              <ErrorMessage
                component="p"
                name="image"
                className="text-red-400 text-sm"
              />
              <button type='submit'  className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400" disabled={isSubmitting}> {isSubmitting ? (
                  <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
                ) : (
                  "save"
                )}</button>
           </Form>
           )}
        </Formik>
       </div>
      </div>
    )
  }
  
