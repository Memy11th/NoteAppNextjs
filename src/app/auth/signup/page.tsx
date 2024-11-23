'use client'
import FormInput from '@/components/FormComponent'
import { SignUpForm } from '@/interfaces/SignupForm'
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
        name:'Phone',
        placeholder:'Enter your phone num'
    }
]
const Signup = () => {

    // a function that recieves the formik values and handle the submit action
    const handleSubmit = (formikValues :SignUpForm) => {
        console.log(formikValues);
    };
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
    <div className='min-h-screen flex justify-center items-center gap-4'>
    <form onSubmit={formik.handleSubmit} className='flex flex-col'>
    {FormInputs.map((input, index) => (
            <FormInput
                key={index}
                {...input}
                value={formik.values[input.name as keyof typeof formik.values]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                FormikError={formik.errors[input.name as keyof typeof formik.errors] as string | undefined}
            />
            ))}
    <button type="submit">Submit</button>
    </form>

    </div>
    
    
    </>
}

export default Signup
