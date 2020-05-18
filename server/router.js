const express = require("express");
const router = express.Router();

const movieController = require("./database/movieController");

router.get("/", (req, res) => {
  res.send("Server is running");
});

//CRUD routes from DB
router.post("/movie", movieController.createMovie);
router.put("/movie/:id", movieController.updateMovie);
router.delete("/movie/:id", movieController.deleteMovie);
router.get("/movie/:id", movieController.getMovieById);
router.get("/movies", movieController.getMovies);

module.exports = router;
