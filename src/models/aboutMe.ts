import mongoose, { Schema, Document, models, model } from 'mongoose';


export interface IAboutMe extends Document {

    name: string;
    email: string;
    description: string[];
    heading: string[];
}

const AboutMeSchema: Schema = new Schema<IAboutMe>({

    name: {type: String, required: true},
    email: {type: String, required: true},
    description: [{type: String, required: true}],
    heading: [{type: String, required: true}]
})

export const AboutMe = models.AboutMe || model<IAboutMe>('AboutMe', AboutMeSchema)