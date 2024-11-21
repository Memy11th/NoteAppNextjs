import Link from 'next/link'
import React from 'react'

const ButtonLink = ({href,name,className}:{href:string,name:string,className:string}) => {
    return <>
    <Link href={href} className={className}>
    {name}
    </Link>
    </>
}

export default ButtonLink
