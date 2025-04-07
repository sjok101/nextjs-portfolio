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
import SocialMedia from "@/components/portfolio/SocialMedia";
import BackgroundInfo from "@/components/portfolio/BackgroundInfo";


export default async function Home() {
  await connectDB();
  const aboutMe: IAboutMe | null = await AboutMe.findOne({});
  const mongooseProjects: IProject[] | null = await Project.find({});
  const projects : IProject[] = JSON.parse(JSON.stringify(mongooseProjects));

  return (
    <div id="head" className="min-h-screen bg-gradient-to-b from-sky-800 to-sky-950">
      <div className="h-[8vh]"></div>
      <NavBar/>
      <TopButton/>
      <BackgroundInfo/>
      <div id="autoslider" className="h-screen w-full flex flex-col justify-center items-center space-y-6 p-4">
        <h2 className="text-3xl font-semibold text-white">Hello world, I'm {aboutMe!.name}, Software Engineer.</h2>
        <div className="h-[8vh]"></div>
        <AutoSlider projects={projects}/>
        <SocialMedia/>
      </div>      
      <div id="about" className="h-screen w-full flex flex-col justify-center items-center space-y-6 p-4">
        <About aboutMe={aboutMe}/>
      </div>
        <div id="projects" className="h-screen w-full flex flex-col justify-center items-center space-y-6 p-4">
        <ProjectDisplay projects={projects}/>
      </div>
        <div id="contact" className="h-screen w-full flex flex-col justify-center items-center space-y-6 p-4">
        <Contact/>
      </div>
    </div>
  );

}
