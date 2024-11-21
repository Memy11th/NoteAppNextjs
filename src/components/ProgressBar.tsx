'use client'
import React from 'react'

const ProgressBar = () => {
    const [Progress,setProgress] = React.useState(0)
    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const progress = (scrollPosition / totalHeight) * 100;
        setProgress(progress);
    }

    React.useEffect(() => {    
        window.addEventListener('scroll', handleScroll);
        return () => {    
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return <>

<div className="h-[4px] w-full bg-gray-300 sticky top-0 left-0 right-0 ">
  <div style={{ width: `${Progress}%` }} className="h-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500  transition-all duration-300"></div>
</div>
    
    </>
}

export default ProgressBar
