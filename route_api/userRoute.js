import express from "express";
import {
  adminFetchUser,
  authUser,
  deleteUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { isAdmin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/register").post(registerUser);
router.route("/").get(protect, isAdmin, adminFetchUser);
router.route("/:id").delete(protect, isAdmin, deleteUser);

export default router;
