import React, { useState, useEffect } from "react";
import queryString from "query-string";


import "./TextContainer.css";

const TextContainer = ({ users, room }) => {
  const [movieData, setMovieData] = useState({});

  //pulls movie info from database
  useEffect(() => {
    const { room } = queryString.parse(window.location.search);

    //fetches from database
    async function fetchData(id) {
      const res = await fetch(
        `https://moviechat-server.herokuapp.com/api/movie/${id}`
      );
      res.json().then((res) => setMovieData(res.data));
    }

    //conditional decides what movie data to pull
    const movieData = (movie) => {
      switch (movie) {
        case "Avengers":
          return fetchData("5fab63dce7fa540004c56117"); 
        case "Gone Girl":
          return fetchData("5fab6364e7fa540004c56116"); 
        case "Joker":
          return fetchData("5fab62c7e7fa540004c56115");
        case "Midsommar":
          return fetchData("5fab6252e7fa540004c56114");
        case "Parasite":
          return fetchData("5fab61f3e7fa540004c56113");
        case "StarWars":
          return fetchData("5fab616be7fa540004c56112");
        case "Drive":
          return fetchData("5fab60fde7fa540004c56111");
        case "Lord of the Rings":
          return fetchData("5fab6082e7fa540004c56110");
        case "Oldboy":
          return fetchData("5fab5f2fe7fa540004c5610f");
        case "Terminator":
          return fetchData("5fab5e6fe7fa540004c5610e");
        case "Thing":
          return fetchData("5fab5df1e7fa540004c5610d");
        case "Monty Python and the Holy Grail":
          return fetchData("5fab5c89e7fa540004c5610c");
        default:
          return [];
      }
    };

    movieData(room);
  }, []);

  return (
    <div className="textContainer">
      {users ? (
        <div className="users">
          <h1>Current Audience</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}

      <div className="movieData">
        <img src={movieData.poster}></img>
        <ul>
          <li>
            <span>RELEASED</span> {movieData.releaseDate}
          </li>
          <li>
            <span>RATING</span> {movieData.rating}
          </li>
          <li>
            <span>WORLD GROSS</span> {movieData.gross}
          </li>
          <li>{movieData.summary}</li>
        </ul>
      </div>
    </div>
  );
};

export default TextContainer;
