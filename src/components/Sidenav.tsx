import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import SidenavItems from './SidenavItems';
import ThemeSwitcher from './ThemeSwitcher';


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
        pathname:'/login',
        Icon:<BiLogOut />
    }
]
// The sidenav component
const Sidenav = () => {
    return <>
    <div className=' md:flex md:flex-col items-center hidden md:col-span-2 rounded-lg  '>

        <div className='flex flex-col gap-8 sticky p-2  inset-0   items-center justify-around  '>
        <ThemeSwitcher />
        <div className='flex flex-col gap-8  '>
        {sidenavItems.map((item , index)=> <SidenavItems key={index} item={item} />)}
        </div>
        </div>
    </div>
    </>
}

export default Sidenav
