'use client'
import { IAboutMe } from "@/models/aboutMe";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function About( {aboutMe} : {aboutMe: IAboutMe | null} ){
    
    const [count, setCount] = useState(0);
    const [leftClicked, setLeftClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);
    const [fade, setFade] = useState(false);
    const buttonStyle= 'text-5xl font-semibold text-slate-300 m-2 h-[120px] w-[60px] bg-slate-800/75 absolute'
    
    //main transition useEffect
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
    }, [leftClicked, rightClicked, aboutMe])

    //Set timer for fade in
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
    
    //Applied fade to both container and text, transition to container only
    return(
        <div>
            <h1 className="text-xl text-slate-100/90">About me</h1>
            <div className="z-10 flex flex-row items-center relative">
                    <button 
                    onClick={() => setLeftClicked(true)}
                    id="about-left" className={`${buttonStyle} left-[-80px]`}>{'<'}
                    </button>
                <div className= {`border-black bg-slate-900/50 bg-opacity-80 text-slate-300
                                w-[1000px] flex flex-row items-start
                                transition-opacity ease-in-out duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                    <div id="fadeNow" ></div>
                    <Image src={aboutMe!.img[count]} alt="Placeholder" width={800} height={600}
                            className={`m-auto ${fade ? 'opacity-0' : 'opacity-100'}`}></Image>
                    <div className={`w-[250px] text-center
                                    ${fade ? 'opacity-0' : 'opacity-100'}`}>
                        <p className="text-left p-5 pt-7">{aboutMe!.heading[count]}</p>
                        <p className="text-left px-5">{aboutMe!.description[count]}</p>
                    </div>
                </div>
                    <button 
                    onClick={() => setRightClicked(true)}
                    id="about-right" className={`${buttonStyle} right-[-80px]`}>{'>'}
                    </button>
            </div>
        </div>
    )
}