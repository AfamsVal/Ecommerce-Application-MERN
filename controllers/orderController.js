import asyncHandler from "express-async-handler";
import Order from "../Models/OrderModel.js";
import orderModel from "../Models/OrderModel.js";

//@desc add new order to database
//@route /api/order/add
//@access private
const addOrderItem = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No item in cart");
    return;
  } else {
    const order = orderModel({
      orderItems,
      shippingAddress,
      paymentMethod,
      User: req.user._id,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      user: req.user._id,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

//@desc Get Order by ID
//@route /api/order:add
//@access private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

export { addOrderItem, getOrderById };
