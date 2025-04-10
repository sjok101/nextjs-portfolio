'use client'
import { IAboutMe } from "@/models/aboutMe";
import { useEffect, useState } from "react";

export default function About( {aboutMe} : {aboutMe: IAboutMe | null} ){
    
    const [count, setCount] = useState(0);
    const [leftClicked, setLeftClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);
    const [fade, setFade] = useState(false);
    //main transition useEffect
    const buttonStyle= 'text-slate-300 m-2 h-[120px] w-[60px] bg-slate-800/75'

    useEffect(()=>{
        if(leftClicked){
            setCount(prev => (prev-1) % aboutMe!.heading.length)
            setLeftClicked(false);
            setFade(true);
        }
        if(rightClicked){
            setCount(prev => (prev+1) % aboutMe!.heading.length)
            setRightClicked(false);
            setFade(true);
        }
    })
    //set timer for fade in
    useEffect(()=>{
        const timeout = window.setTimeout(()=>{
            setFade(false);
        }, 500);
        return ()=> clearInterval(timeout);
    }, [fade]);

    useEffect(()=>{
        if (count<0){
            setCount(2);
        }
    }, [count])
    
    //applied fade to both container and text, transition to container only
    return(
        <div className="z-10 flex flex-row items-center">
            <button 
            onClick={() => setLeftClicked(true)}
            id="about-left" className={buttonStyle}>Left</button>
        <div className= {`border-black bg-slate-900/50 bg-opacity-80 text-slate-300
                         h-[600px] w-[1000px] flex flex-row items-start
                         transition-opacity ease-in-out duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
            
            <img src="https://www.placehold.co/800x600"></img>
            <div className={`w-[250px] text-center
                             ${fade ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-left p-5 pt-7">{aboutMe!.heading[count]}</p>
                <p className="text-left px-5">{aboutMe!.description[count]}</p>
            </div>
        </div>
            <button 
            onClick={() => setRightClicked(true)}
            id="about-right" className={buttonStyle}>Right</button>
        </div>
    )
}