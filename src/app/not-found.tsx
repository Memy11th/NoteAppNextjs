
import Link from 'next/link'
import React from 'react'

const notFound = () => {
    return <>
    <div className='min-h-screen flex-col flex justify-center items-center'>
            <h5 className='font-bold text-center'>Error 404 |Page Not Found</h5>
            <Link href={'/'} className='underline font-semibold text-center '>Try Again</Link>
    </div>
    </>
}

export default notFound
