import { Schema, model, Document } from 'mongoose'

const imageSchema = new Schema({
    title: String,
    description: String,
    imagePath: String
})

interface interfacePhoto extends Document {
    title: string,
    desdescription: string,
    imagePath: string
}
export default model<interfacePhoto>('photos', imageSchema);