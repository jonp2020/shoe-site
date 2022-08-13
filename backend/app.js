const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
const { handleInvalidPath } = require("./errors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/shoes", require("./routes/shoes"));
app.use("/api/track-orders", require("./routes/trackOrders"));

app.all("/*", handleInvalidPath);

module.exports = app;
