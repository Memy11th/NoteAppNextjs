import { NoteDetails } from '@/interfaces/noteDetails'
import React from 'react'

const NoteCard = ({DetailedNote}:{DetailedNote:NoteDetails}) => {
    const {_id,content,createdAt,title} = DetailedNote
    // a series of  js integrated functions to get the exact date for each note
    const timeResponse = `${createdAt}`;
    const date = new Date(timeResponse);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const day = date.getDate().toString().padStart(2, '0');
    return <>
            <div className=' cursor-pointer col-span-6 md:col-span-4 p-2 shadow-md hover:shadow-lg hover:scale-100 scale-95 duration-300 transition-all  flex flex-col relative mx-auto w-full  bg-black/15 rounded-xl  gap-4 '>
                <div>
                        <h4 className='font-semibold text-start line-clamp-4 text-sm'>{title}</h4>
                        <p className='text-start line-clamp-4 text-sm'>{content}</p>
                        <div className='flex justify-end'>
                                <p className='text-xs  absolute top-1 right-1 '>{day + '/' + month + '/' + year}</p>
                                
                        </div>
                </div>
            </div>
    </>
}

export default NoteCard
