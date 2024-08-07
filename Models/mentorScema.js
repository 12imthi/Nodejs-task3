

import mongoose from "mongoose";

const MentorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    expertise: String,
});

const Mentor = mongoose.model("Employee",MentorSchema)

export default Mentor