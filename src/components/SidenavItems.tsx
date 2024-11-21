import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import { usePathname } from 'next/navigation'
import React from 'react'
const SidenavItems = ({item}: {item:{name:string,pathname:string,Icon:Icon}}) => {
    const {name,pathname,Icon} = item
    const activePathname = usePathname();
    const isActive = activePathname === pathname;
    return <>
    
    </>
}

export default SidenavItems
