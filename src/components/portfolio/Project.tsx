import { IProject } from "@/models/projects";

export default function Project( {project}:{ project: IProject }){
    return(
        <div className="mb-2 h-[120px] w-[700px] bg-slate-800/50">

            This is a {project.name}.
        </div>
    )
}