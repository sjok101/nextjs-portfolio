import { IProject } from "@/models/projects";

export default function Project( {project}:{ project: IProject }){
    return(
        <div className="mb-2 h-[100px] w-[550px] bg-slate-800/50">

            This is a {project.name}.
        </div>
    )
}