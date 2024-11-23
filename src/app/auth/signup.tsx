'use client'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
const FormInputs = [
    {
        type:'text',
        name:'name',
        placeholder:'Ahmed Muhammed',
    },
    {
        type:'email',
        name:'email',
        placeholder:'BZoGq@example.com',
    },    
    {
        type:'password',
        name:'password',
        placeholder:'password',
    },
    {
        type:'text',
        name:'age',
        placeholder:'enter your age',
    },
    {
        type:'text',
        name:'Phone num',
        placeholder:'Enter your phone num'
    }
]
const signup = () => {

    // a function that recieves the formik values and handle the submit action
    const handleSubmit =(formikValues){
        console.log(formikValues)
    }
    // the validation schema using yup for better , cleaner and readable validation and easy to read and understand
    const validationSchema = yup.object({
        
    })
    // formik object for form handling
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            age:'',
            phone:''
        },
        onSubmit:handleSubmit,
        validationSchema,
    })


    return <>
    <form onSubmit={formik.handleSubmit}>

        
    </form>
    
    </>
}

export default signup
