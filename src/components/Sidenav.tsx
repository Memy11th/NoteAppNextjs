import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { GiPlagueDoctorProfile } from "react-icons/gi";


// Items for the sidenav to map over which contains name of the item , it's icon & pathname then it will be passed for a component specially made for the items of the sidenav for a cleaner code
const sidenavItems = [
    {
        name:'Home',
        pathname:'/',
        Icon : <IoIosHome />
    },
    {
        name:'Profile',
        pathname:'/profile',
        Icon:<GiPlagueDoctorProfile />
    },
    {
        name:'Logout',
        pathname:'/register',
        Icon:<BiLogOut />
    }
]
// The sidenav component
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
