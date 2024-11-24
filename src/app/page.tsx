'use client'
import { getallNotes } from "@/Api/Api"
import { useEffect } from "react"

export default function Home() {

    const getNotes = async ()=>{
        const token = localStorage.getItem('token') || '';
        const res = await getallNotes(token);
        console.log(res)
    }

    useEffect( () => {
        getNotes();
    }, [] )
    return <>
        <div className="min-h-screen">

        </div>
    </>
}
