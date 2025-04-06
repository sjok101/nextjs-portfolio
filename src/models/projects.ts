import mongoose, { Schema, Document, models, model } from 'mongoose';


export interface IProject extends Document {

    name: string;
    link: string;
    description: string;
}

const ProjectSchema: Schema = new Schema<IProject>({

    name: {type: String, required: true},
    link: {type: String, required: true},
    description: {type: String, required: true}
})

export const Project = models.Project || model<IProject>('Project', ProjectSchema)