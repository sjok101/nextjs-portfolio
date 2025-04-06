import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let isConnect = false;

export async function connectDB(){
    if (isConnect) return;

    await mongoose.connect(process.env.MONGODB_URI!, {
        dbName: 'portfolio',
    });
    console.log("Connected to DB")
    isConnect = true;
}