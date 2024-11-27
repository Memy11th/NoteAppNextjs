import { DeleteFn, UpdateFn } from '@/Api/Api';
import React from 'react'
import { FiEdit } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
import Button from './Button';

const token  = localStorage.getItem('token') || '';

const EdeteSection = ({id}:{id:string}) => {
    const handleDelete = async ()=>{
        const res = await DeleteFn(id,token);
        console.log(res)
    };

    const handleUpdate = async ()=>{
        const res = await UpdateFn(id,token,{});
        console.log(res);
    }
    return <>
            <div className='flex gap-3  items-center absolute bottom-1 right-2 '>
                

                <Button  Fn={handleUpdate} component={<FiEdit className='text-lg text-yellow-500 cursor-pointer' />} />
                <Button  Fn={handleDelete} component={<MdDeleteSweep className='text-lg text-red-600 cursor-pointer' />} />

            </div>
    </>
}

export default EdeteSection
