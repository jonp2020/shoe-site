const express = require("express");
const app = express();
const { handleInvalidPath } = require("./errors");

app.use(express.json());
app.use("/api/shoes", require("./routes/shoes"));
app.all("/*", handleInvalidPath);

module.exports = app;
