import express from "express";
import {
        login, sendEmail, getUserProfile, getUserDetails,
        sendResetEmail, resendResetEmail, getAssessment, getUserJob,
        saveJob, maxPhaseNumber, getQuestions, getAnswerStored,
        retrieveAnswer, savePhaseNumber, getPhaseNumber, adminLogin,
        employeeID, addBasicInfo, readBasicInfo, deleteBasicInfo,
        editBasicInfo, readJobInfo, readAccountInfo, getBasicInfoById,
        editJobInfo, getJobInfoById, deleteJobInfo, deleteAccountInfo,
        getAccountInfoById, editAccountInfo
} from "../controller/auth.js";

const router = express.Router();

// User Side Routes
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

// Route for Getting User Selected Job
router.get("/get-job", getUserJob);

// Route for Selected Job to store on Database
router.post("/save-job", saveJob);

// Route for Video Assesment
router.get("/max-phase", maxPhaseNumber);

// Route for Video Assesment
router.get("/assessments", getAssessment);

// Route for Q&A Assesment (question)
router.get("/questions", getQuestions);

// Route for storing answer
router.post("/answers", getAnswerStored);

// Route for retrieving answer
router.get("/retrieve-answers", retrieveAnswer);

// Route for storing answer
router.post("/save-phase", savePhaseNumber);

// Route for retrieving answer
router.get("/get-phase", getPhaseNumber);

// Admin Side Routes
// Route for admin login
router.post("/admin-login", adminLogin);

// Route for Auto Employee ID
router.get("/employeeid", employeeID);
// Employee Basic Info CRUD Routes
// Create
router.post("/add-basicinfo", addBasicInfo);
// Read
router.get("/read-basicinfo", readBasicInfo);
// Update
router.post("/edit-basicinfo", editBasicInfo);
router.get("/get-basicinfo/:editEmployeeId", getBasicInfoById);
// Delete
router.post("/delete-basicinfo", deleteBasicInfo);

// Employee Job Info CRUD Route
// Read
router.get("/read-jobinfo", readJobInfo);
// Update
router.post("/edit-jobinfo", editJobInfo);
router.get("/get-jobinfo/:editEmployeeId", getJobInfoById);
// Delete
router.post("/delete-jobinfo", deleteJobInfo);
// Employee Account Info CRUD
// Read
router.get("/read-accountinfo", readAccountInfo);
// Update
router.post("/edit-accountinfo", editAccountInfo);
router.get("/get-accountinfo/:editEmployeeId", getAccountInfoById);
// Delete
router.post("/delete-accountinfo", deleteAccountInfo);
export default router;