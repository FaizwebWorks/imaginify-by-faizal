import { Document, model, models, Schema } from "mongoose";

export interface User extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo: string;
    firstName: string | null;
    lastName: string | null;
    planId: string;
    creditBalance: number; 
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 0 }
})

const User = models?.User || model("User", UserSchema)

export default User;