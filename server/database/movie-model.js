const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = new Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  gross: { type: String, required: true },
  releaseDate: { type: String, required: true },
  summary: { type: String, required: true },
  poster: { type: String, require: true },
});

module.exports = mongoose.model("movies", Movie);
