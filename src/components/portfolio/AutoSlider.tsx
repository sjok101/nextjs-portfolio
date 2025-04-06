'use client'
import { IProject } from "@/models/projects";
import { useEffect, useState } from "react";
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

        <div className="relative transition duration-500 ease-in-out border">
            <div 
            key={projects[count]._id as string}
            className={`transition-opacity duration-500 bg-slate-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
                <h3 className = "text-xl font-semibold">{projects[count].name}</h3>
                <p className="text-gray-600">{projects[count].description}</p>
            </div>
        </div>
    )
}