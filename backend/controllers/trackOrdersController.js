const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

// route GET /api/shoes/mens
const getOrders = asyncHandler(async (req, res) => {
  const order = await Order.find({ refId: req.body.orderRef });

  res.status(200).json(order);
});

module.exports = {
  getOrders,
};
