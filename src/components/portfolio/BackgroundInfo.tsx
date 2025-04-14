'use client'
import Link from "next/link";
import { useEffect, useState } from "react"
export default function BackgroundInfo(){

    const [isVisible, setIsVisible] = useState(true);
    //Hide component based on the windows innerWidth (minimum allowable width).
    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 1500)
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, []);
    
    
    return(
        <div className={`z-0 text-slate-200/90 font-semibold 
                        transition-opacity duration-200 ease-in-out
                            ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`p-6 bg-gradient-to-l from-sky-500/50 to-transparent`}>
                            
                <ul className="text-xl mb-1 text-sky-200/70">Relevant Links</ul>
                <ul><Link href={'https://www.gmu.edu/'} target="_blank">George Mason University</Link></ul>
                <ul><Link href={'https://cs.gmu.edu/'} target="_blank">Computer Science BS</Link></ul>
                <ul><Link href={'https://mason.gmu.edu/~bok/swe432/'} target="_blank">Mason Portfolio</Link></ul>
            </div>
            <div className="px-6 mt-5">
                <ul className="text-xl mb-1 text-sky-200/70">Categories</ul>
                <ul><Link href={'https://www.java.com/en/'} target="_blank">Java</Link></ul>
                <ul><Link href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'} target="_blank">JavaScript</Link></ul>
                <ul><Link href={'https://www.typescriptlang.org/'} target="_blank">TypeScript</Link></ul>
                <ul><Link href={'https://learn.microsoft.com/en-us/dotnet/csharp/'} target="_blank">C#</Link></ul>
                <ul><Link href={'https://www.python.org/'} target="_blank">Python</Link></ul>
            </div>
            <div className="px-6 mt-5">
                <ul className="text-xl mb-1 text-sky-200/70">Extensions</ul>
                <ul><Link href={'https://react.dev/'} target="_blank">React</Link></ul>
                <ul><Link href={'https://nextjs.org/'} target="_blank">NextJS</Link></ul>
                <ul><Link href={'https://tailwindcss.com/'} target="_blank">Tailwind</Link></ul>
                <ul><Link href={'https://nodejs.org/en'} target="_blank">Node</Link></ul>
                <ul><Link href={'https://maven.apache.org/'} target="_blank">Maven</Link></ul>
            </div>
            <div className="px-6 mt-5">
                <ul className="text-xl mb-1 text-sky-200/70">Storage</ul>
                <ul><Link href={'https://www.mongodb.com/'} target="_blank">MongoDB</Link></ul>
                <ul><Link href={'https://www.mysql.com/'} target="_blank">MySQL</Link></ul>
            </div>
            <div className="px-6 mt-5">
                <ul className="text-xl mb-1 text-sky-200/70">Hardware</ul>
                <ul><Link href={'https://code.visualstudio.com/'} target="_blank">Visual Studio Code</Link></ul>
                <ul><Link href={'https://visualstudio.microsoft.com/'} target="_blank">Visual Studio</Link></ul>
                <ul><Link href={'https://unity.com/'} target="_blank">Unity Engine</Link></ul>
                <ul><Link href={'https://eclipseide.org/'} target="_blank">Eclipse</Link></ul>
            </div>
            <div className="px-6 mt-5">
                <ul className="text-xl mb-1 text-sky-200/70">Network</ul>
                <ul><Link href={'https://vercel.com/'} target="_blank">Vercel</Link></ul>
            </div>
        </div>
    )
}