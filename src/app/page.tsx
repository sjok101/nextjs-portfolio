import About from "@/components/portfolio/About";
import AutoSlider from "@/components/portfolio/AutoSlider";
import Contact from "@/components/portfolio/Contact";
import ProjectDisplay from "@/components/portfolio/ProjectDisplay";
import { connectDB } from "@/util/mongoDB";
import { AboutMe, IAboutMe } from "@/models/aboutMe";
import { Project, IProject } from "@/models/projects";


export default async function Home() {
  await connectDB();
  const aboutMe: IAboutMe | null = await AboutMe.findOne({});
  const mongooseProjects: IProject[] | null = await Project.find({});
  const projects : IProject[] = JSON.parse(JSON.stringify(mongooseProjects));

  return (
    <div>
      <h2 className="text-3xl font-semibold">Hello world, I'm {aboutMe!.name}, Software Engineer.</h2>
      <br></br>
      Add small logo with my name that links to my resume called profile. 
      Add Link to About me.
      Add Link to Projects section.

      Include search bar that shows my projects.
      <br></br>
      <AutoSlider projects={projects}/>
      <br></br>

      Add education and skills to the left. A general resume icon, Github, LinkedIn, Contact.
      <br></br><br></br>
      <About aboutMe={aboutMe}/>
      
      <br></br>
      <ProjectDisplay projects={projects}/>
      <br></br>
      <Contact/>
    </div>
  );

}
