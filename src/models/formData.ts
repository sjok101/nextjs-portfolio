import  { Schema, Document, models, model } from 'mongoose';


export interface IForm extends Document {

    name: string;
    email: string;
    message: string;
}

const FormSchema: Schema = new Schema({

    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
})

export const Form = models.Form || model<IForm>('Form', FormSchema)