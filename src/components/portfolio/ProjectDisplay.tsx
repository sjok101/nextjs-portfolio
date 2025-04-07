'use client'
import { IProject } from "@/models/projects";
import Project from "./Project";

export default function ProjectDisplay( {projects}:{ projects: IProject[] }){

    return(
        <div className="border bg-indigo-800">
            This is a Project Display section.
            <ul>
                <li><Project project={projects[0]}/></li>
                <li><Project project={projects[1]}/></li>
                <li><Project project={projects[2]}/></li>
            </ul>
        </div>
    )
}