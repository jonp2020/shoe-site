const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;

const app = express();

app.use("/api/shoes", require("./routes/shoes"));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
