'use client'
import { IAboutMe } from "@/models/aboutMe";
import { useEffect, useState } from "react";

export default function About( {aboutMe} : {aboutMe: IAboutMe | null} ){
    
    const [count, setCount] = useState(0);
    const [leftClicked, setLeftClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);
    const [fade, setFade] = useState(true);

    useEffect(()=>{
        if(leftClicked){
            setCount(prev => (prev-1) % aboutMe!.heading.length)

            setLeftClicked(false);
        }
        if(rightClicked){
            setCount(prev => (prev+1) % aboutMe!.heading.length)

            setRightClicked(false);
        }
    })


    useEffect(()=>{
        if (count<0){
            setCount(2);
        }
    }, [count])
    
    return(
        <div className="z-10">
            <button 
            onClick={() => setLeftClicked(true)}
            id="about-left">Left</button>
        <div className= {`border-black bg-slate-800 bg-opacity-80 text-slate-300
                         h-[600px] flex flex-row items-start
                         transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            
            <img src="https://www.placehold.co/800x600"></img>
            <div className="w-[250px] text-center">
                <p className="text-left p-5 pt-7">{aboutMe!.heading[count]}</p>
                <p className="text-left px-5">{aboutMe!.description[count]}</p>
            </div>
        </div>
            <button 
            onClick={() => setRightClicked(true)}
            id="about-right">Right</button>
        </div>
    )
}