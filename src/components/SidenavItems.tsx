'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
const SidenavItems = ({item}: {item:{name:string,pathname:string,Icon:React.ReactNode}}) => {
    // destructing the passed item 
    const {name,pathname,Icon} = item;
    // getting the active path
    const activePathname = usePathname();
    // checking if the current path is active
    const isActive = activePathname === pathname;
    return (
    <Link href={pathname} className={`flex gap-2 items-center p-2 hover:bg-gray-300/35 rounded-md ${isActive ? 'bg-gray-300' : ''}`} >
                    <div className={`w-6 h-6 flex items-center justify-center duration-300  `}>
                    {Icon}
                    </div>
                    <span className={` duration-300 `}>{name}</span>
    </Link>
)}

export default SidenavItems
