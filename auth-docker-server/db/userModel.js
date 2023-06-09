import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide an password!"],
        unique: false
    }
})

export default mongoose.model("Users", UserSchema);