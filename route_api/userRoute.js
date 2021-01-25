import express from "express";
import {
  adminFetchUsers,
  authUser,
  deleteUser,
  getUserProfile,
  registerUser,
  updateAdminUser,
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
router.route("/").get(protect, isAdmin, adminFetchUsers);
router
  .route("/:id")
  .delete(protect, isAdmin, deleteUser)
  .put(protect, isAdmin, updateAdminUser);

export default router;
