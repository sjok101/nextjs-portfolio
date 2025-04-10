'use client'
import { IProject } from "@/models/projects";
import Project from "./Project";
import { useEffect, useState } from "react";
import Image from 'next/image';
import logo from "@/../public/230x125.svg"
export default function ProjectDisplay( {projects}:{ projects: IProject[] }){
    //useStates to set values for previews and their index
    const [preview, setPreview] = useState(false);
    const [index, setIndex] = useState(0);
    
    return(
        <div>
            <p className="text-xl text-slate-200">Projects</p>
            <div className="h-[800px] w-[800px] text-slate-300
                            flex flex-row">
                <ul>
                    {projects.map((project, i)=> (
                        <li key={i} onMouseEnter={() => setPreview(true)}
                                    onMouseLeave={() => setPreview(false)}
                                    onMouseOver={() => setIndex(i)}><Project project={project}/></li>
                    ))}
                </ul>
                <div id="preview" className={` ml-4 w-[244px] bg-slate-800/30
                                               ${preview ? 'opacity-100' : 'opacity-0'} `}>
                    <div>{projects[index].name}</div>
                    <ul>
                        {projects[index].link.map((img, i) => (
                            <li key={i}><Image src={img} alt ={"Preview"} width={230} height={125}></Image></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}