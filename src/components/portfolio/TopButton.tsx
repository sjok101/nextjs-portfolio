'use client'
import Link from "next/link"

export default function TopButton(){
    return(
        <div>

            <Link href="#top" scroll={true} className="z-50 h-15 w-15 bg-slate-500 text-slate-200 flex justify-center items-center
                                                        fixed bottom-4 right-4 rounded-2xl">
                <span className="cursor-pointer">To Top</span>
            </Link>
        </div>
    )
}