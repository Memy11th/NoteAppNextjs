import { DeleteFn, deleteNote } from '@/Api/Api';
import React from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
import Button from './Button';


const EdeteSection = ({id}:{id:string}) => {
    const handleDelete = async ()=>{
        const token  = localStorage.getItem('token') || '';
        const res = await DeleteFn(id,token);
        console.log(res)
    };
    return <>
            <div className='flex gap-3 items-center absolute bottom-1 right-2 '>
                

                <Button  Fn={handleDelete} component={<FiEdit className='text-lg text-gray-500 cursor-pointer' />} />
                <Button  Fn={handleDelete} component={<MdDeleteSweep className='text-lg text-gray-500 cursor-pointer' />} />

            </div>
    </>
}

export default EdeteSection
