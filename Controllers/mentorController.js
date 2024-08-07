import Mentor from "../Models/mentorScema.js";
import mongoose from "mongoose";

export const createMentor = async (req, res) => {
    try {
      //const { } = req.body
      const newMentor = new Mentor(req.body);
  
      await newMentor.save();
  
      res.status(200).json({
        massage: "mentor created successfully",
        result: [newMentor],
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error in create mentor" });
    }
  };

  export const getMentors = async (req, res) => {
    try {
      const mentors = await Mentor.find(); // Fetch all employees
      res
        .status(200)
        .json({ message: "Employees retrieved successfully", result: mentors });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Internal server error in retrieve mentors" });
    }
  };