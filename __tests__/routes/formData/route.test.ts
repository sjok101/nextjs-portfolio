import { Form } from "@/models/formData";
import { GET } from "@/app/api/formData/route"
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let forms:typeof Form[];

beforeAll(async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('Missing MONGODB_URI env variable');
    
    await mongoose.connect(uri, {
      dbName: 'test',
    });
    
});

describe('AboutMe Routes', ()=>{
    it('retrieves a single aboutMe model', async() => {
        forms = await Form.create([
            {name: 'Alice', email: 'alice@test.com', message: 'This is a test'},
            {name: 'John', email: 'john@test.com', message: 'This is another test'}
        ]);
        
        
        const res = await GET();

        const json = await res.json();
        expect(json).toEqual(JSON.parse(JSON.stringify(forms)));
        expect(res.status).toBe(200);

    })
})
