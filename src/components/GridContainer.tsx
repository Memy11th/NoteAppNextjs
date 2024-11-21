import React from 'react'

const GridContainer = ({cols ,children }:{cols:number , children:React.ReactNode}) => {
    return <>
    <div className={` grid-container grid-cols-${cols} flex justify-center items-center `}>
        {children}
    </div>
    </>
}

export default GridContainer
