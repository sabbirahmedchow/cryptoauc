const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes");
const cors = require("cors");
require("dotenv").config();

//initialize express app
var app = express();

//conect to DB
mongoose.connect(
  process.env.DB_URI_LOCAL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
    else console.log("Database connection has been established");
  }
);

//declare middlewares
app.use(cors());
app.use(express.json({ extended: false }));

//declare routes
app.use(userRoute);


//run express server in a port
var port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Express server has started on port ${port}`);
});
