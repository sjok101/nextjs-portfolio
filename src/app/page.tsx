import About from "@/components/portfolio/About";
import AutoSlider from "@/components/portfolio/AutoSlider";
import Contact from "@/components/portfolio/Contact";
import ProjectDisplay from "@/components/portfolio/ProjectDisplay";
import { connectDB } from "@/util/mongoDB";
import { AboutMe, IAboutMe } from "@/models/aboutMe";
import { Project, IProject } from "@/models/projects";
import Link from "next/link";
import NavBar from "@/components/portfolio/NavBar";
import TopButton from "@/components/portfolio/TopButton";


export default async function Home() {
  await connectDB();
  const aboutMe: IAboutMe | null = await AboutMe.findOne({});
  const mongooseProjects: IProject[] | null = await Project.find({});
  const projects : IProject[] = JSON.parse(JSON.stringify(mongooseProjects));

  return (
    <div id="head" className="min-h-screen bg-gradient-to-b from-sky-800 to-sky-950">
      <div className="h-5"></div>
      <NavBar/>
      <div className="h-5"></div>
      <TopButton/>
      <div id="autoslider" className="h-screen w-full">
        <h2 className="text-3xl font-semibold">Hello world, I'm {aboutMe!.name}, Software Engineer.</h2>
        <div className="h-5"></div>
        <AutoSlider projects={projects}/>
      </div>

      Add education and skills to the left. A general resume icon, Github, LinkedIn, Contact.
      <div>
        <ul>
          <li>skills</li>
        </ul>
      </div>
      
      <div id="about" className="h-screen w-full">
        <About aboutMe={aboutMe}/>
      </div>
        <div id="projects" className="h-screen w-full">
      <ProjectDisplay projects={projects}/>
      </div>
        <div id="contact" className="h-screen w-full">
      <Contact/>
      </div>
    </div>
  );

}
