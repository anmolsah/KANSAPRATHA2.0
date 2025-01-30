const express = require("express");
require("dotenv").config();


const app = express();

app.use("/api", require("./routes/authRoutes"));

//const port = process.env.PORT || 9999;
const port = 9999;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
