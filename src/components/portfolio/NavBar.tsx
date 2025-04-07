'use client'
import Link from "next/link"

export default function NavBar(){
    return(
        <div>

            <Link href="#about" scroll={true}>
                <span className="cursor-pointer">Contact</span>
            </Link>
            <Link href="#projects" scroll={true}>
                <span className="cursor-pointer">Contact</span>
            </Link>
            <Link href="#contact" scroll={true}>
                <span className="cursor-pointer">Contact</span>
            </Link>

        </div>
    )
}