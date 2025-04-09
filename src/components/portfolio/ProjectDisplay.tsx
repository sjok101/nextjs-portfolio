'use client'
import { IProject } from "@/models/projects";
import Project from "./Project";

export default function ProjectDisplay( {projects}:{ projects: IProject[] }){

    projects.map((x) => console.log(x))

    return(
        <div>
            <p className="text-xl text-slate-200">Projects</p>
            <div className="h-[800px] w-[800px] text-slate-300
                            flex flex-row">
                <ul>
                    {projects.map((project, i)=> (
                        <li key={i}><Project project={project}/></li>
                    ))}
                </ul>
                <div id="preview" className=" ml-4 w-[244px] bg-slate-800/30">Preview</div>
            </div>
        </div>
    )
}