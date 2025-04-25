import { connectDB } from "@/util/mongoDB";
import { AboutMe } from "@/models/aboutMe";

export async function GET() {
    await connectDB();
    const aboutMe = await AboutMe.findOne({});
    return new Response(JSON.stringify(aboutMe), {
        headers: {
            "Content-Type": "application/json"
        },
    })
}

