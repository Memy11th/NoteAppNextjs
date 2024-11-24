import { NoteDetails } from '@/interfaces/noteDetails'
import React from 'react'

const NoteCard = ({DetailedNote}:{DetailedNote:NoteDetails}) => {
    const {_id,content,createdAt,createdBy,title} = DetailedNote
    return <>
            <div className=' col-span-6 md:col-span-3 bg-black/15 rounded-xl flex flex-col gap-2 '>
                <p>{content}</p>
                <p>{title}</p>
                {createdAt}
                {createdBy}
                {_id}
            </div>
    </>
}

export default NoteCard
