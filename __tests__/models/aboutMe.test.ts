import { AboutMe } from "@/models/aboutMe";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

beforeAll(async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('Missing MONGODB_URI env variable');
    
    await mongoose.connect(uri, {
      dbName: 'test',
    });
  });
  
  afterEach(async () => {
    await AboutMe.deleteMany({});
  });
  
  afterAll(async () => {
    await mongoose.disconnect();
  });
  


describe('AboutMe Model', () => {
    it('saves an aboutMe model', async () => {
        const aboutMe = await AboutMe.create({ name: 'Alice', email: 'alice@test.com', heading: ['head1'], description:['desc1'], img:['img1'] })
        
        expect(aboutMe.name).toBe('Alice');
    
    })

})