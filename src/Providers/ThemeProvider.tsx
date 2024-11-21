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
        {children}
    </ThemeProvider>
    
    </>
}

export default ThemeProv
