import { AboutMe } from "@/models/aboutMe";
import { GET } from "@/app/api/aboutMe/route"
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { NextRequest } from "next/server";

dotenv.config();

let aboutMe:typeof AboutMe;

beforeAll(async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('Missing MONGODB_URI env variable');
    
    await mongoose.connect(uri, {
      dbName: 'test',
    });
    
});

describe('AboutMe Routes', ()=>{
    it('retrieves a single aboutMe model', async() => {
        aboutMe = await AboutMe.create({ name: 'Alice', email: 'alice@test.com', heading: ['head1'], description:['desc1'], img:['img1'] });
        
        
        const res = await GET();

        const json = await res.json();
        expect(json).toEqual(JSON.parse(JSON.stringify(aboutMe)));
        expect(res.status).toBe(200);

    })
})
