import { connectDB } from "@/util/mongoDB";
import { Project } from "@/models/projects";

export async function GET() {
    await connectDB();
    const projects = await Project.find({});
    return new Response(JSON.stringify(projects), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export async function POST(req:typeof Project){
    await connectDB();
    const body = await req.find
    console.log(body);
    const newProject = await Project.create(body);
    return new Response(JSON.stringify(newProject), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        }
    })
    
    

}

