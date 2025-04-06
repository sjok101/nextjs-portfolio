import { IProject } from "@/models/projects";

export default function Project( {project}:{ project: IProject }){
    return(
        <div>

            This is a {project.name}.
        </div>
    )
}