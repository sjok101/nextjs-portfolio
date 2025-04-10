'use client'
import { IProject } from "@/models/projects";
import { useEffect, useState } from "react";
import Image from "next/image"
export default function AutoSlider( {projects} : {projects: IProject[]} ){
     
    const [count, setCount] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = window.setInterval(()=>{
            setFade(false);
            window.setTimeout(() =>{
                setCount(prev => (prev+1) % projects.length);
                setFade(true);
            }, 500);
        }, 10000);

        return () => clearInterval(interval);
    }, [projects.length]); //handles all projects

    return(

        <div className="h-[500px] w-[900px] border relative transition duration-500 ease-in-out mx-auto ">
            <div 
            key={projects[count]._id as string}
            className={`h-[500px] w-[900px] transition-opacity duration-500 bg-slate-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
                <h3 className = "text-xl font-semibold">{projects[count].name}</h3>
                <p className="text-gray-600">{projects[count].description}</p>
                <Image src={projects[count].frontPreview} alt="AutoSlidePreview" height="500" width="900"></Image>
            </div>
        </div>
    )
}