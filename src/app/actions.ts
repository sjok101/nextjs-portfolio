"use server";

import { connectDB } from "@/util/mongoDB";
import { Form } from "@/models/formData";


//server action handles posting form to DB
export async function handleSubmit(formData: FormData){
    const id = formData.get('id') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    await connectDB();

    await Form.create({
        id,
        name,
        email,
        message
    })

}