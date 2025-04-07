import { IAboutMe } from "@/models/aboutMe";

export default function About( {aboutMe} : {aboutMe: IAboutMe | null} ){
    
    
    return(
        <div className="z-10">
            <button id="about-left">Left</button>
        <div className=" border-black bg-slate-800 bg-opacity-80 text-slate-300
                         h-[600px] flex flex-row items-start">
            
            <img src="https://www.placehold.co/800x600"></img>
            <div className="w-[250px] text-center">
                <p className="text-left p-5 pt-7">{aboutMe!.heading[0]}</p>
                <p className="text-left px-5">{aboutMe!.description[0]}</p>
            </div>
        </div>
            <button id="about-right">Right</button>
        </div>
    )
}