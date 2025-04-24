import mongoose from 'mongoose';
import { connectDB } from '@/util/mongoDB'

jest.mock('mongoose');

describe('MongoDB Connection', ()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    })
});


