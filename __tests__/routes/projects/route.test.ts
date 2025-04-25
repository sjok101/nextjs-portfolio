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
let mockBody: IProject;
beforeAll(async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('Missing MONGODB_URI env variable');
    
    await mongoose.connect(uri, {
      dbName: 'test',
    });
    mockBody = 
    {
        name: "Test 1",
        link: ["/"],
        banner: "/",
        frontPreview: "/",
        frontPreviewUrl: "/",
        description: "Test Desc"
    } as IProject;
});
afterAll(async () => {
    await Project.deleteMany({});
    await mongoose.disconnect();
  });

describe('Projects Routes', ()=>{
    it('can post projects', async() => {
        projects = mockNextRequest<IProject>(mockBody);
        
        const res = await POST(projects);
        expect(res.status).toBe(201);
    })

    it('can retrieve projects', async() => {
        // await Project.create(mockBody);
        const res = await GET();
        const json = await res.json();
        console.log(json)
        expect(json[0]).toMatchObject((mockBody));
        expect(res.status).toBe(200);
    })
})
