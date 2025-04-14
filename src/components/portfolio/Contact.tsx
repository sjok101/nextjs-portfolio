"use client";

import { handleSubmit } from "@/app/actions";

export default function Contact(){
    const textFieldStyle = 'mb-5 bg-slate-100'
    
    return(
        //Send the form via server action.
        <div>
            <h1 className="text-xl text-slate-100/90">Contact Form</h1>
            <div className="p-1 bg-slate-900/50 text-slate-800/90 h-[600px] w-[1000px]">
                <form action={handleSubmit} className="m-4 flex flex-col bg-slate-600/10">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className={`${textFieldStyle} w-[300px]`}
                        />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your E-Mail"
                        required
                        className={`${textFieldStyle} w-[300px]`}
                        />

                    <input
                        type="text"
                        name="message"
                        placeholder="Your Message"
                        required
                        className={`${textFieldStyle} h-[400px]`}
                        />
                    <button type="submit" className={` text-2xl bg-slate-300/70 text-slate-900/90 h-[50px] rounded`}>Send Message</button>
                </form>
            </div>
        </div>
    )
}