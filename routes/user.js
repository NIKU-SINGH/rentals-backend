import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// // To check if user is logged in
// router.get("/verifyauth",verifyToken, (req,res,next) => {
//     res.send("hey user you are logged in!");
// })

// // To check if user has permission or not to delete
// router.get("/verifyuser/:id",verifyUser, (req,res,next) => {
//     res.send("You are logged in and can delete you account!.");
// })

// // To check if admin is there or not
// router.get("/verifyadmin/:id",verifyAdmin, (req,res,next) => {
//     res.send("You are logged as Admin and can delete all account!.");
// })

// UPDATE 
router.put("/:id", verifyUser, updateUser)

// DELETE
router.delete("/:id",verifyUser, deleteUser)

// GET
router.get("/:id", verifyUser, getUser)

// GET ALL
router.get("/", verifyAdmin, getAllUser)

export default router;