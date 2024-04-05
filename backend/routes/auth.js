import express from "express";
import { login, 
        sendEmail, 
        getUserProfile, 
        getUserDetails, 
        sendResetEmail, 
        resendResetEmail, 
        getAssessment, 
        maxPhaseNumber, 
        getQuestions,
} from "../controller/auth.js";

{/* getAnswerStored */}

const router = express.Router();

// Route for user login
router.post("/login", login);

// Route for sending email
router.post("/send-email", sendEmail);

// Route for sending reset password email
router.post("/reset-password", sendResetEmail);

// Route for resending reset password email
router.post("/resend-email", resendResetEmail);

// Route for fetching user profile
router.get("/user-profile", getUserProfile);

// Route for getting user info
router.get("/user-details", getUserDetails);

// Route for Video Assesment
router.get("/max-phase", maxPhaseNumber);

// Route for Video Assesment
router.get("/assessments", getAssessment);

// Route for Q&A Assesment (question)
router.get("/questions", getQuestions);

// Route for storing answer
 {/* router.post("/answers", getAnswerStored); */}

export default router;