'use client'
import Link from "next/link"

export default function TopButton(){
    return(
        <div>

            <Link href="#head" scroll={true} className="h-15 w-15 bg-slate-500 flex justify-center items-center fixed bottom-4 right-4 rounded-2xl">
                <span className="cursor-pointer">To Top</span>
            </Link>
        </div>
    )
}