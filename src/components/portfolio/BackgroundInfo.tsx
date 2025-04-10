'use client'
import { useEffect, useState } from "react"
export default function BackgroundInfo(){

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 1235)
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, []);
    
    
    return(
        <div className={`p-6 z-0 text-slate-200/90 font-semibold absolute top-50 left-10 bg-gradient-to-l from-sky-500/50 to-transparent
                         transition-opacity duration-200 ease-in-out
                         ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            
                <ul className="text-xl">Education:</ul>
                <ul>School Here</ul>
                <ul>Year Graduated</ul>
                <br></br>
                <ul><h3>Skills:</h3></ul>
                <ul>React</ul>
                <ul>JavaScript</ul>
                <ul></ul>
            
        </div>
    )
}