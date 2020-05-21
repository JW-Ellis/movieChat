import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getMovieByID = (id) => api.get(`/movie/${id}`);

const apis = {
  getMovieByID,
};

export default apis;
