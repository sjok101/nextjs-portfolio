'use client'
import { IProject } from "@/models/projects";
import Project from "./Project";
import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
export default function ProjectDisplay( {projects}:{ projects: IProject[] }){
    //useStates to set values for previews and their index
    const [preview, setPreview] = useState(false);
    const [index, setIndex] = useState(0);
    
    return(
        <div>
            <p className="text-xl text-slate-200">Projects</p>
            <div className="w-[1200px] bg-slate-900/20 text-slate-300
                            flex flex-row p-3">
                <ul>
                    {/* On mouse enter and exit with allow user to view the preview. On mouse over will indicate the project index to view the proper preview. */}
                    {projects.map((project, i)=> (
                        <li key={i} onMouseEnter={() => setPreview(true)}
                                    onMouseLeave={() => setPreview(false)}
                                    onMouseOver={() => setIndex(i)}>
                            <Link href={project.frontPreviewUrl} target="_blank"><Project project={project}/> </Link>
                        </li>
                    ))}
                </ul>
                <div id="preview" className={` flex flex-col self-start
                                                ml-4 w-[494px] h-auto bg-slate-800/30
                                               ${preview ? 'opacity-100' : 'opacity-0'} `}>
                    <div>{projects[index].name}</div>
                    <ul>
                        {projects[index].link.map((img, i) => (
                            <li key={i} className="py-5 px-3.5"><Image src={img} alt ={"Preview"} width={480} height={260}></Image></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}