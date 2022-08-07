const asyncHandler = require("express-async-handler");
const Shoe = require("../models/shoeModel");

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

module.exports = {
  getAllShoes,
  getWomensShoes,
  getMensShoes,
  getKidsShoes,
  updateShoe,
  postShoe,
};
