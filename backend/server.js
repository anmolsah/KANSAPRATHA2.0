const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./utilities/db");

app.use(
  cors({
    origin: ["http://localhost:9000"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", require("./routes/authRoutes"));

//const port = process.env.PORT || 9999;
const port = 9999;
dbConnect();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
