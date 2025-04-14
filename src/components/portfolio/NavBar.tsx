'use client'
import Link from "next/link"


export default function NavBar(){
    const navButtonStyle = "mx-3 flex justify-center items-center h-[45px] w-[90px] hover:bg-gradient-to-r from-sky-400 to-transparent text-white font-semibold text-opacity-90";
    return(
        <div className="z-10 flex items-center h-[45px] w-[1000px] bg-gradient-to-r from-sky-500 to-sky-700 border-blue-950 rounded">

            <Link href="#about" scroll={true} className={navButtonStyle}>
                <span className="cursor-pointer">About Me</span>
            </Link>
            <Link href="#projects" scroll={true} className={navButtonStyle}>
                <span className="cursor-pointer">Projects</span>
            </Link>
            <Link href="#contact" scroll={true} className={navButtonStyle}>
                <span className="cursor-pointer">Contact</span>
            </Link>

        </div>
    )
}