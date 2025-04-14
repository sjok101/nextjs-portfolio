import Link from "next/link";
import Image from "next/image";

export default function SocialMedia(){
    const socialMediaStyle = "h-80 w-80 bg-gradient-to-b from-sky-400 to-sky-900/90 block my-10 border p-10 text-slate-100/90 border-black"
    return(
        <div className="flex flex-row justify-between w-[1000px]">
            <Link href="https://www.github.com" target="_blank" className={socialMediaStyle}>
                <Image src="images/github.svg" alt="Github Logo" width={240} height={240}></Image>
                <span className="cursor-pointer">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" className={socialMediaStyle}>
                <Image src="images/linkedin.svg" alt="LinkedIn Logo" width={240} height={240}></Image>
                <span className="cursor-pointer">LinkedIn</span>
            </Link>
            <Link href="/" target="_blank" className={socialMediaStyle}>
                <Image src="images/resume.svg" alt="Resume Logo" width={240} height={240}></Image>
                <span className="cursor-pointer">Resume</span>
            </Link>
        </div>

    )
}