'use client'
import { myNotes } from '@/Api/Api';
import GridContainer from '@/components/GridContainer';
import NoteCard from '@/components/NoteCard';
import React from 'react'

const Profile = () => {
    const token = localStorage.getItem('token');

    const [notesz,setNotes] = React.useState([]);

    const Notes = async()=>{
        const notes = await myNotes(token || '');
        setNotes(notes?.notes || []);
        };

    React.useEffect(()=>{
        Notes();
    },[notesz]);
    return <>
    <div className='min-h-screen'>
        <h1>Profile</h1>
        <GridContainer cols={12}>
        {notesz?.map((note , index)=><NoteCard key={index} DetailedNote={note}/>)}

        </GridContainer>
    </div>
    
    </>
}

export default Profile
