import React from 'react'
import GridContainer from './GridContainer'

const Navbar = () => {
    return <>
    <GridContainer cols={12} customStyling={' mx-1'}>
        <div className={` col-span-12 flex justify-center items-center sticky top-0 left-0 right-0  rounded-xl`}>
        <h5 className='p-2   text-xl font-bold  '>Notes App</h5>
    </div>

    </GridContainer>
    </>
}

export default Navbar
