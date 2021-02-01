import asyncHandler from "express-async-handler";
import Order from "../Models/OrderModel.js";

//@desc add new order to database
//@route POST: /api/order
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
  console.log(req.body);

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No item in cart");
  } else {
    const order = Order({
      orderItems,
      shippingAddress,
      paymentMethod,
      User: req.user._id,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      user: req.user._id,
      createdAt: Date.now(),
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

//@desc Get Order by ID
//@route GET: /api/order/:id
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

//@desc Update Order to Paid
//@route PUT: /api/order/:id/pay
//@access private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

//@desc GET get login user order
//@route GET:  /api/order/myorders
//@access Private
const getMyOrders = asyncHandler(async (req, res) => {
  const order = await Order.find({ user: req.user._id });

  if (order) return res.json(order);

  res.status(404);
  throw new Error("Order not found");
});

//@desc   Admin orders
//@route GET: /api/orders
//@access Private
const getAdminOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({});

  if (orders) return res.json(orders);

  res.status(404);
  throw new Error("Orders not found");
});

export {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getAdminOrders,
};
