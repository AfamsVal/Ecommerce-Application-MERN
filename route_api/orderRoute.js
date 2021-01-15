import express from "express";
const router = express.Router();
import {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

//@desc add new order to database
//@route /api/order/add
//@access private
router.route("/").post(protect, addOrderItem);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;
