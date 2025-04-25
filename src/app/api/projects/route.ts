import { connectDB } from "@/util/mongoDB";
import { Project } from "@/models/projects";
import { NextRequest } from 'next/server';
import type { IProject } from '@/models/projects';

export async function GET() {
    await connectDB();
    const projects = await Project.find({});
    return new Response(JSON.stringify(projects), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export async function POST(req: NextRequest){
    await connectDB();
    const body = await req.json();
    const newProject = await Project.create(body);
    return new Response(JSON.stringify(newProject), {
        status: 201,
        headers: {
            "Content-Type": "application/json",
        }
    })
}

