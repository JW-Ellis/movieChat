import axios from "axios";

const api = axios.create({
  baseURL: "https://moviechat-server.herokuapp.com/api",
});

export const getMovieByID = (id) => api.get(`/movie/${id}`);

const apis = {
  getMovieByID,
};

export default apis;
