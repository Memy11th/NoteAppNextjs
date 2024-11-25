import { deleteNote } from '@/Api/Api';
import React from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";


const EdeteSection = ({id}:{id:string}) => {
    const handleDelete = async()=>{
        const token = localStorage.getItem('token') || '';
        const res = await deleteNote(id , token)
        console.log(res)
    };
    return <>
            <div className='flex gap-3 items-center absolute bottom-1 right-2 '>
                <FiEdit className='text-lg text-gray-500 cursor-pointer '  />
                <MdDeleteSweep className='text-lg text-gray-500 cursor-pointer' onClick={handleDelete} />
            </div>
    </>
}

export default EdeteSection
