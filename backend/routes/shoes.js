const express = require("express");
const router = express.Router();
const {
  getAllShoes,
  getWomensShoes,
  getMensShoes,
  getKidsShoes,
  updateShoe,
  postShoe,
  placeOrder,
} = require("../controllers/shoesController");

router.route("/").get(getAllShoes).post(postShoe);

router.put("/:id", updateShoe);

router.get("/womens", getWomensShoes);

router.get("/mens", getMensShoes);

router.get("/kids", getKidsShoes);

router.post("/place-order", placeOrder);

module.exports = router;
