'use client'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'

const ThemeProv = ({children}:{children:React.ReactNode}) => {
    const [isMounted,setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true)
    },[isMounted]);

    if(!isMounted) return null;
    return <>
    <ThemeProvider defaultTheme='system' attribute='class' >
        <div className=' dark:bg-black bg-white min-h-screen transition-colors duration-700 '>
        {children}
        </div>
    </ThemeProvider>
    
    </>
}

export default ThemeProv
