'use client'
import { myNotes } from '@/Api/Api';
import React from 'react'

const Profile = () => {
    const token = localStorage.getItem('token');

    const [MineNotes,setMineNotes] = React.useState([]);

    const Notes = async()=>{
        const notes = await myNotes(token || '');
        setMineNotes(notes?.notes || []);
        };

    React.useEffect(()=>{
        Notes();
    },[]);
    return <>
    <div className='min-h-screen'>
        <h1>Profile</h1>
    </div>
    
    </>
}

export default Profile
