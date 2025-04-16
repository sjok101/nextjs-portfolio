'use client'
import { IProject } from "@/models/projects";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"
export default function AutoSlider( {projects} : {projects: IProject[]} ){
    
    const buttonStyle= 'text-5xl font-semibold text-slate-300 h-[120px] w-[60px] bg-slate-800/75 absolute'
    const [count, setCount] = useState(0);
    const [fade, setFade] = useState(true);

    //Uses a timer to set the fade effect and raise the count (project index)
    useEffect(() => {
        const interval = window.setInterval(()=>{
            setFade(false);
            window.setTimeout(() =>{
                setCount(prev => (prev+1) % projects.length);
                setFade(true);
            }, 500);
        }, 20000);

        return () => clearInterval(interval);
    }, [projects.length]); //handles all projects



    return(
        <div className="z-10 flex flex-row items-center relative">
            {/*Go left button, set >0 due to state updates. No fade, immediate transition. */}
            <button onClick={() => setCount(prev => count>0 ? (prev-1) % projects.length : projects.length-1)}
                    className={`${buttonStyle} left-[-80px]`}>{'<'}</button>
        <div className=" w-[1000px] border-black transition duration-500 ease-in-out">
            <div 
            key={projects[count]._id as string}
            className={` w-[1000px] flex justify-center  transition-opacity duration-500 bg-slate-900/50 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
                <Link href={projects[count].frontPreviewUrl} target="_blank" className="block">
                    <Image src={projects[count].frontPreview} alt="AutoSlidePreview" height={500} width={1000}></Image>
                </Link>
                <div className="ml-1 flex flex-col self-start w-[200px]">
                    <h3 className = "mb-3 text-xl font-semibold text-slate-100">{projects[count].name}</h3>
                    <p className="text-slate-100/90 ">{projects[count].description}</p>
                </div>
            </div>
        </div>
        {/* Go right button */}
        <button onClick={() => setCount(prev => (prev+1) % projects.length)}
                className={`${buttonStyle} right-[-80px]`}>{'>'}</button>
        </div>
    )
}