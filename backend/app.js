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

// Handle production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/public/`));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

// app.all("/*", handleInvalidPath);

module.exports = app;
