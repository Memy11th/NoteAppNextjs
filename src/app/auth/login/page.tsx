'use client'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
interface LoginForm{
    email:string,
    password:string,
}

const LoginItems = [
    {
        type:'email',
        name:'email',
        placeholder:'BZoGq@example.com'
    },
    {
        type:'password',
        name:'password',
        placeholder:'password'
    }
]
const Login = () => {
    const handleSubmit = (formikValues:LoginForm) => {
        console.log(formikValues)
    }
    const validationSchema = yup.object({
        email:yup.string().required('Email is required').email('Invalid email'),
        password:yup.string().required('Password is required').min(8,'Password is too short').max(50,'Password is too long'),
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: handleSubmit,
    })


    return <>
    <div className='min-h-screen'>

        <form onSubmit={formik.handleSubmit}>


        </form>

    </div>
    </>
}

export default Login
