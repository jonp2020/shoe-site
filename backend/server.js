const express = require("express");
const app = require("./app.js");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 4000;

connectDB();

// Handle production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/public/`));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
