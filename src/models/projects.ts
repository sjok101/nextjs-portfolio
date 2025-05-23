import { Schema, Document, models, model } from 'mongoose';


export interface IProject extends Document {

    name: string;
    link: string[];
    banner: string;
    frontPreview: string;
    frontPreviewUrl: string;
    description: string;
}

const ProjectSchema: Schema = new Schema<IProject>({

    name: {type: String, required: true},
    link: [{type: String, required: true}],
    banner: {type: String, required: true},
    frontPreview: {type: String, required: true},
    frontPreviewUrl: {type: String, required: true},
    description: {type: String, required: true}
})

export const Project = models.Project || model<IProject>('Project', ProjectSchema)