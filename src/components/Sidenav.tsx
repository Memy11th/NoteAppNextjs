import React from 'react'


const sidenavItems = [
    {
        name:'Home',
        pathname:'/',
        Icon : 'icon'
    },
    {
        name:'Profile',
        pathname:'/profile',
        Icon:'Icon'
    },
    {
        name:'Logout',
        pathname:'/register',
        Icon:'Icon'
    }
]
const Sidenav = () => {
    return <>
    <div className=' md:col-span-2 md:flex hidden md:flex-col justify-center items-center gap-3 min-h-screen bg-red-800'>
    {sidenavItems.map((item , index)=> <div key={index}>
            <p>{item.name}</p>
    </div>
    )}


    </div>
    </>
}

export default Sidenav
