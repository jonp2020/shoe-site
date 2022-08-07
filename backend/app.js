const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/shoes", require("./routes/shoes"));

module.exports = app;
