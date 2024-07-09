const mongoose = require('mongoose');
require("dotenv").config();

mongoose
.connect("mongodb://127.0.0.1:27017/foodi")
.then(
  console.log("MongoDB Connected Successfully!")
)

.catch((error) => console.log("Error connecting to MongoDB", error));

module.exports = mongoose.connection;