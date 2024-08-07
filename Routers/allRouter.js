import  express  from "express";
import { createMentor, getMentors } from "../Controllers/mentorController.js";

const router = express.Router()

router.get('/getMentor',getMentors)

export default router