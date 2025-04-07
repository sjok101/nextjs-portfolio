"use client";

import { handleSubmit } from "@/app/actions";

export default function Contact(){
    
    
    return(
        //implement a contact form
        //send the data via router
        <div className="bg-slate-800 text-slate-300">
            <form action={handleSubmit}>
            
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    />

                <input
                    type="email"
                    name="email"
                    placeholder="Your E-Mail"
                    required
                    />
                
                <input
                    type="text"
                    name="message"
                    placeholder="Your Message"
                    required
                    />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}