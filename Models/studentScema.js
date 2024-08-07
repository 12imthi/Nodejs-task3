

import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    enrolledCourses: [String], // Courses the student is enrolled in
});

const Student = mongoose.model("Employee",StudentSchema)

export default Student