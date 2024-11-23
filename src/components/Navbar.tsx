import React from 'react'
import GridContainer from './GridContainer'
import ButtonLink from './Button'

const Navbar = () => {
    return <>
    <GridContainer cols={12} customStyling={' mx-1'}>
        <div className='  col-span-9 flex justify-center items-center sticky top-0 left-0 right-0  rounded-xl'>
        <h5 className='p-2   text-xl font-bold  '>Notes App</h5>
    </div>
    <div className='flex justify-around items-center col-span-3 gap-3 '>
        <ButtonLink href={'/auth'} name={'Register'} className={' p-2 text-center rounded-xl w-1/3 '} />
        <ButtonLink href={'/login'} name={'Login'} className={' p-2 text-center rounded-xl w-1/3 '} />
    </div>

    </GridContainer>
    </>
}

export default Navbar
