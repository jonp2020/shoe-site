const asyncHandler = require("express-async-handler");
const crypto = require("crypto");
const Shoe = require("../models/shoeModel");
const Order = require("../models/orderModel");

// route GET /api/shoes
const getAllShoes = asyncHandler(async (req, res) => {
  const shoes = await Shoe.find();

  res.status(200).json(shoes);
});

// route POST /api/shoes
const postShoe = asyncHandler(async (req, res) => {
  const {
    name,
    brand,
    gender,
    category,
    colours,
    price,
    sizes_availability,
    imageURL,
    featured,
  } = req.body;

  const shoe = await Shoe.create({
    name,
    brand,
    gender,
    category,
    colours,
    price,
    sizes_availability,
    imageURL,
    featured,
  });

  res.status(200).json(shoe);
});

// route GET /api/shoes/womens
const getWomensShoes = asyncHandler(async (req, res) => {
  const shoes = await Shoe.find({ gender: "WOMEN" });

  res.status(200).json(shoes);
});

// route GET /api/shoes/mens
const getMensShoes = asyncHandler(async (req, res) => {
  const shoes = await Shoe.find({ gender: "MEN" });

  res.status(200).json(shoes);
});

// route GET /api/shoes/mens
const getKidsShoes = asyncHandler(async (req, res) => {
  const shoes = await Shoe.find({ gender: "KIDS" });

  res.status(200).json(shoes);
});

// route PUT /api/shoes/:id
const updateShoe = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Update shoe ${req.params.id}` });
});
// route POST /api/place-order
const placeOrder = asyncHandler(async (req, res) => {
  const { deliveryAddress, paymentDetails, orderDetails } = req.body;

  // Update shoe quantities in stock

  console.log(orderDetails);

  for (orderItem of orderDetails) {
    const shoe = await Shoe.findByIdAndUpdate(
      {
        _id: orderItem.shoeId,
      },
      {
        $inc: {
          ["sizes_availability." +
          orderItem.selectedColour +
          "." +
          orderItem.selectedSize]: -orderItem.quantity,
        },
      },
      { new: true }
    );
  }

  const uuid = crypto.randomUUID();
  const refId = "GS-" + uuid.split("-")[0];
  const name = deliveryAddress.name;
  const email = deliveryAddress.email;
  const phone = deliveryAddress.phone;
  const addressLine1 = deliveryAddress.addressLine1;
  const addressLine2 = deliveryAddress.addressLine2;
  const city = deliveryAddress.city;
  const county = deliveryAddress.county;
  const postCode = deliveryAddress.postCode;
  const paymentConfirmed = paymentDetails.paymentConfirmed;
  const paymentRecord = paymentDetails.paymentRecord;
  const nameOnCard = paymentDetails.nameOnCard;
  const selectedPaymentOption = paymentDetails.selectedPaymentOption;
  const itemsOrdered = JSON.stringify(orderDetails);
  const deliveryStatus = "pending";

  const order = await Order.create({
    uuid,
    refId,
    name,
    email,
    phone,
    addressLine1,
    addressLine2,
    city,
    county,
    postCode,
    paymentConfirmed,
    paymentRecord,
    nameOnCard,
    selectedPaymentOption,
    itemsOrdered,
    deliveryStatus,
  });

  res.status(200).json({ msg: "Your order has been placed", refId: refId });
});

module.exports = {
  getAllShoes,
  getWomensShoes,
  getMensShoes,
  getKidsShoes,
  updateShoe,
  postShoe,
  placeOrder,
};
