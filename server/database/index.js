const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movie", { useNewUrlParser: true })
  .catch((e) => {
    console.log("Connection error", e.message);
  });

const database = mongoose.connection;

module.exports = database;
