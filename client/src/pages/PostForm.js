import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { usePost } from '../context/postContext'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'

export function PostForm(){
   const {createPost} = usePost()
   const navigate = useNavigate()
    return(
      <div>
        <Formik // le digo que de valores iniciales en las claves esté vacio
        initialValues={{title:'', description:'' }}
        //le digo que valide lo siguiente
          validationSchema={Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required")
          })}
          //cuando se ejecute el evento creará el post y nos redireccionará a la página principal
          onSubmit={async (values, actions) => {
          await createPost(values) ;navigate('/')
        }}>
           {({handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
              <Field name="title" className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" placeholder="title"/>
              <ErrorMessage component="p" className='text-red-400 text-sm' name='title'/>
              <Field name="description" className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full" placeholder="description"/>
              <ErrorMessage component="p" className='text-red-400 text-sm' name='description'/>
              <button type='submit'>Save</button>
           </Form>
           )}
        </Formik>
      </div>
    )
  }
  
