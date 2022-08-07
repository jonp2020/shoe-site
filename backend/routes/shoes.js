const express = require("express");
const router = express.Router();
const {
  getAllShoes,
  getWomensShoes,
  getMensShoes,
  getKidsShoes,
  updateShoe,
} = require("../controllers/shoesController");

router.get("/", getAllShoes);

router.put("/:id", updateShoe);

router.get("/womens", getWomensShoes);

router.get("/mens", getMensShoes);

router.get("/kids", getKidsShoes);

module.exports = router;
