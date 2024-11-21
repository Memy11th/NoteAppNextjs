import React from 'react'
import GridContainer from './GridContainer'
import ButtonLink from './Button'

const Navbar = () => {
    return <>
    <GridContainer cols={12} customStyling={'bg-black mx-1'}>
        <div className=' bg-black col-span-9 flex justify-center items-center sticky top-0 left-0 right-0  rounded-xl'>
        <h5 className='p-2  text-white text-xl font-bold  '>Notes App</h5>
    </div>
    <div className='flex justify-between items-center col-span-3 gap-3 '>
        <ButtonLink href={'/register'} name={'Register'} className={'bg-red-700 p-2 text-center '} />
        <ButtonLink href={'/login'} name={'Login'} className={'bg-yellow-700 p-2 text-center '} />
    </div>

    </GridContainer>
    </>
}

export default Navbar
