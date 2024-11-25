'use client';

import { getallNotes } from "@/Api/Api";
import NoteCard from "@/components/NoteCard";
import React, { Suspense, useEffect, useState } from "react";
import LoadingSpinner from "./loading";

// Lazy loading GridContainer with React.lazy
const LazyGridContainer = React.lazy(() => import('@/components/GridContainer'));

export default function Home() {
    const [notes, setNotes] = useState<any[]>([]);

    const getNotes = async () => {
        const token = localStorage.getItem('token') || '';
        const res = await getallNotes(token);
        console.log(res);
        setNotes(res?.notes || []);
    };

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div className="min-h-screen p-2">
            <Suspense fallback={<LoadingSpinner />}>
                <LazyGridContainer cols={12}>
                    {notes.map((note, index) => (
                        <NoteCard key={index} DetailedNote={note} />
                    ))}
                </LazyGridContainer>
            </Suspense>
        </div>
    );
}
