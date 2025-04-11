import About from "@/components/portfolio/About";
import AutoSlider from "@/components/portfolio/AutoSlider";
import Contact from "@/components/portfolio/Contact";
import ProjectDisplay from "@/components/portfolio/ProjectDisplay";
import { connectDB } from "@/util/mongoDB";
import { AboutMe, IAboutMe } from "@/models/aboutMe";
import { Project, IProject } from "@/models/projects";
import NavBar from "@/components/portfolio/NavBar";
import TopButton from "@/components/portfolio/TopButton";
import SocialMedia from "@/components/portfolio/SocialMedia";
import BackgroundInfo from "@/components/portfolio/BackgroundInfo";


export default async function Home() {
  await connectDB();
  const mongooseAboutMe: IAboutMe | null = await AboutMe.findOne({});
  const aboutMe: IAboutMe = JSON.parse(JSON.stringify(mongooseAboutMe));
  const mongooseProjects: IProject[] | null = await Project.find({});
  const projects : IProject[] = JSON.parse(JSON.stringify(mongooseProjects));

  return (
    <div id="top" className="min-h-screen bg-gradient-to-b from-sky-800 to-sky-950">
      <div className="h-[80px]"></div>
      <NavBar/>
      <TopButton/>
      <BackgroundInfo/>
      <div id="autoslider" className="my-10 w-auto flex flex-col justify-center items-center space-y-6 p-4">
        <h2 className="m-10 text-3xl font-semibold text-white">Hello world, I&#39;m {aboutMe!.name}, Software Engineer.</h2>
        <AutoSlider projects={projects}/>
        <SocialMedia/>
      </div>      
      <div id="about" className="my-40 w-full flex flex-col justify-center items-center space-y-6 p-4">
        <About aboutMe={aboutMe}/>
      </div>
        <div id="projects" className="my-40 w-full flex flex-col items-center space-y-6 p-4">
        <ProjectDisplay projects={projects}/>
      </div>
        <div id="contact" className="min-h-1/2 w-full flex flex-col justify-center items-center space-y-6 p-4">
        <Contact/>
      </div>
    </div>
  );

}
