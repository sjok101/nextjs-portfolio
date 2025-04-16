import { IProject } from "@/models/projects";
import Image from 'next/image';
export default function Project( {project}:{ project: IProject }){
    return(
        <div className="mb-2 h-[120px] w-[700px] bg-slate-800/50
                        flex flex-row">
            <Image src={project.banner} alt="Project Banner" height={120} width={285}></Image>
            <div id="description" className="ml-2">
                {project.name}
            </div>
        </div>
    )
}