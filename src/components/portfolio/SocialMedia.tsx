import Link from "next/link";

export default function SocialMedia(){
    const socialMediaStyle = "h-60 w-60 bg-slate-400 block mx-11 my-10 border"
    return(
        <div className="flex flex-row justify-center">
            <Link href="https://www.github.com" target="_blank" className={socialMediaStyle}>
                <span className="cursor-pointer">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" className={socialMediaStyle}>
                <span className="cursor-pointer">LinkedIn</span>
            </Link>
            <Link href="/" target="_blank" className={socialMediaStyle}>
                <span className="cursor-pointer">Resume</span>
            </Link>
        </div>

    )
}