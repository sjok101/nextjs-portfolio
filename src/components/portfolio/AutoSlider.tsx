'use client'
import { IProject } from "@/models/projects";
import { useEffect, useState } from "react";
import Image from "next/image"
export default function AutoSlider( {projects} : {projects: IProject[]} ){
    
    const buttonStyle= 'text-slate-300 m-2 h-[120px] w-[60px] bg-slate-800/75'
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

    useEffect(() => {
        if (count<0){
            setCount(2);
        }
    }, [count]);

    return(
        <div className="z-10 flex flex-row items-center">
            {/* set >0 due to state updates */}
            <button onClick={() => setCount(prev => count>0 ? (prev-1) % projects.length : 2)}
                    className={buttonStyle}>Left</button>
        <div className="h-[400px] w-[900px] border relative transition duration-500 ease-in-out mx-auto">
            <div 
            key={projects[count]._id as string}
            className={`h-[400px] w-[900px] flex justify-center transition-opacity duration-500 bg-slate-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
                <Image src={projects[count].frontPreview} alt="AutoSlidePreview" height={500} width={700}></Image>
                <div className="flex flex-col self-start w-[200px]">
                    <h3 className = "text-xl font-semibold ">{projects[count].name}</h3>
                    <p className="text-gray-600 ">{projects[count].description}</p>
                </div>
            </div>
        </div>
        <button onClick={() => setCount(prev => (prev+1) % projects.length)}
                className={buttonStyle}>Right</button>
        </div>
    )
}