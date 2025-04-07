import { IAboutMe } from "@/models/aboutMe";

export default function About( {aboutMe} : {aboutMe: IAboutMe | null} ){
    return(
        <div className="border bg-indigo-800 bg-opacity-80">
            
            <p>Hey there, my name is {aboutMe!.name}!</p>
            <img src="https://www.placehold.co/100x100"></img>
            <p>Just to quickly describe myself, I am an aspiring developer who took a major leap through
                careers to get to this point. What is this point? Well, I took a 2 year hiatus away from remodeling
                homes and enrolled at George Mason University for a Computer Science Degree. Why you ask? The world is ever changing
                and technology has been and will be at its forefront, learning computer science now will not only improve my life 
                but hopefully my families' life and the future of all!
            </p>
            <br></br>
            <p>Things other than wanting to debug types in TS... I spend a healthy amount of time together
                with my family, and the rest developing 2D games and participating in gamejams for fun. Here is a
                game jam that I recently participated in!
            </p>
            <img src="https://www.placehold.co/100x100"></img>
        </div>
    )
}