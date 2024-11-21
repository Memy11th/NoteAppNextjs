'use client'
import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
    const [isMounted,setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true)
    },[isMounted]);

    return <>
    
    </>
}

export default ThemeSwitcher
