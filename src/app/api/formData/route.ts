import { connectDB } from "@/util/mongoDB";
import { Form } from "@/models/formData";

export async function GET() {
    await connectDB();
    const formData = await Form.find({});
    return new Response(JSON.stringify(formData), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

