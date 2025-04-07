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
        <div className={`z-0 absolute top-5 left-10 bg-slate-100
                         transition-opacity duration-200 ease-in-out
                         ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <li>
                <ul><h3>Education:</h3></ul>
                <ul>School Here</ul>
                <ul>Year Graduated</ul>
                <br></br>
                <ul><h3>Skills:</h3></ul>
                <ul>React</ul>
                <ul>JavaScript</ul>
                <ul></ul>
            </li>
        </div>
    )
}