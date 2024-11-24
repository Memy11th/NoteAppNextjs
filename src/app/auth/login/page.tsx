'use client'
import { handleLogin } from '@/Api/Api'
import FormInput from '@/components/FormComponent'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import * as yup from 'yup'
export interface LoginForm{
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
        placeholder:'Enter your password'
    }
]
const Login = () => {
    const router = useRouter();
    const handleSubmit = async (formikValues:LoginForm) => {
        try {
            const res = await handleLogin(formikValues);
            console.log('Login succeded :' , res);
            localStorage.setItem('token' , res.token);
            router.replace('/');

        } catch (error) {
            console.error('Login failed : ' , error)
        }
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
        <div className="min-h-screen flex  items-center justify-center bg-gray-100">
        <form
            onSubmit={formik.handleSubmit}
            className="w-full max-w-sm p-4 flex flex-col items-start justify-center bg-white shadow-md rounded-lg space-y-4"
        >
            {LoginItems.map((item, index) => (
            <FormInput
                key={index}
                {...item}
                FormikError={formik.errors[item.name as keyof typeof formik.errors] as string | undefined}
                touched={formik.touched[item.name as keyof typeof formik.touched]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[item.name as keyof typeof formik.values]}
            />
            ))}
            <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
            >
            Login
            </button>
            <h5 className='text-blue-500 '>Already have an account ? <Link className='underline' href={'/auth/register'}>Register now</Link></h5>
        </form>
        </div>
    </>
}

export default Login
