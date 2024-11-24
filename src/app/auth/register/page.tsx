'use client'
import { handleSignup } from '@/Api/Api'
import FormInput from '@/components/FormComponent'
import { SignUpForm } from '@/interfaces/SignupForm'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
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
        name:'phone',
        placeholder:'Enter your phone num'
    }
]

    // a function that recieves the formik values and handle the submit action
    const Signup = () => {
        const router = useRouter();
        // Async function to handle form submission
        const handleSubmit = async (formikValues: SignUpForm) => {
            console.log(formikValues);
            try {
                const res = await handleSignup(formikValues);
                console.log(res);
                router.replace('auth/login')
                
            } catch (error) {
                console.error('Error signing up:', error);
            }
            
            
        };
    // the validation schema using yup for better , cleaner and readable validation and easy to read and understand
    const validationSchema = yup.object({
        name:yup.string().required('Name is required').min(2,'name is too short').max(50,'name is too long'),
        email:yup.string().required('Email is required').email('Invalid email'),
        password:yup.string().required('Password is required').min(8,'Password is too short').max(50,'Password is too long'),
        age:yup.string().required('Age is required').min(2,'Age is too short').max(3,'Age is too long'),
        phone:yup.string().required('Phone is required').min(10,'Phone is too short').max(15,'Phone is too long'),
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
                touched={formik.touched[input.name as keyof typeof formik.touched]}
            />
            ))}
    <button type="submit"  >Submit</button>
    </form>

    </div>
    
    
    </>
}

export default Signup
