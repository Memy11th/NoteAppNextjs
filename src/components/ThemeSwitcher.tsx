'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md';


const ThemeSwitcher = () => {
    const {theme,setTheme,systemTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    return <>

    <div className='mt-7'>
    {currentTheme === 'dark' ? <MdLightMode onClick={()=>setTheme('light')} className='text-xl cursor-pointer '/>
    : <MdDarkMode onClick={()=>setTheme('dark')} className='text-xl cursor-pointer '/> }
    </div>
    
    </>
}

export default ThemeSwitcher
