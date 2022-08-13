const express = require("express");
const router = express.Router();
const { getOrders } = require("../controllers/trackOrdersController");

router.post("/", getOrders);

module.exports = router;
