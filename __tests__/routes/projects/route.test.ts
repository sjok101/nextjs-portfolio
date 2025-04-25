import { Project } from "@/models/projects";
import type { IProject } from '@/models/projects';
import { GET, POST } from "@/app/api/projects/route"
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { NextRequest } from "next/server";

dotenv.config();

function mockNextRequest<T>(body: T): NextRequest {
    return {
      json: async () => body,
    } as unknown as NextRequest;
  }

let projects:NextRequest;

beforeAll(async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('Missing MONGODB_URI env variable');
    
    await mongoose.connect(uri, {
      dbName: 'test',
    });
    
});
afterAll(async () => {
    await Project.deleteMany({});
    await mongoose.disconnect();
  });

describe('Projects Routes', ()=>{
    it('can post projects', async() => {

        const mockBody: IProject = 
            {
                name: "Test 1",
                link: ["/"],
                banner: "/",
                frontPreview: "/",
                frontPreviewUrl: "/",
                description: "Test Desc"
            } as IProject;

        projects = mockNextRequest<IProject>(mockBody);
        
        const res = await POST(projects);
        expect(res.status).toBe(201);

        const json = await res.json();
        expect(json.name).toBe('Test 1');
    })
})
