const express = require("express");
const app = require("./app.js");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 4000;

connectDB();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
