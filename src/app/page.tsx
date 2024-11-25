'use client'
import { getallNotes } from "@/Api/Api"
import GridContainer from "@/components/GridContainer";
import NoteCard from "@/components/NoteCard";
import React from "react";
import { useEffect } from "react"

export default function Home() {
    const [notes , setNotes] = React.useState([]);
    const getNotes = async ()=>{
        const token = localStorage.getItem('token') || '';
        const res = await getallNotes(token);
        console.log(res)
        setNotes(res?.notes)
    }

    useEffect( () => {
        getNotes();
    }, [] )
    return <>
        <div className="min-h-screen p-2">
            <GridContainer cols={12}>
            {notes?.map((note,index)=> <NoteCard key={index} DetailedNote={note} />)}
            </GridContainer>
        </div>
    </>
}
