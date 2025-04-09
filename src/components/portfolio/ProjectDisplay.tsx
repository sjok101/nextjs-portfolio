'use client'
import { IProject } from "@/models/projects";
import Project from "./Project";
import { useEffect, useState } from "react";

export default function ProjectDisplay( {projects}:{ projects: IProject[] }){

    
    const [preview, setPreview] = useState(false);
    console.log(preview);
    return(
        <div>
            <p className="text-xl text-slate-200">Projects</p>
            <div className="h-[800px] w-[800px] text-slate-300
                            flex flex-row">
                <ul>
                    {projects.map((project, i)=> (
                        <li key={i} onMouseEnter={() => setPreview(true)}
                                    onMouseLeave={() => setPreview(false)}><Project project={project}/></li>
                    ))}
                </ul>
                <div id="preview" className={` ml-4 w-[244px] bg-slate-800/30
                                               ${preview ? 'opacity-100' : 'opacity-0'} `}>Preview</div>
            </div>
        </div>
    )
}