import React, { useState, useEffect } from "react";
import queryString from "query-string";
import onlineIcon from "../../Icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users, room }) => {
  const [movieData, setMovieData] = useState({});

  //pulls movie info from database
  useEffect(() => {
    const { room } = queryString.parse(window.location.search);

    //fetches from database
    async function fetchData(id) {
      const res = await fetch(`http://localhost:5000/api/movie/${id}`);
      res.json().then((res) => setMovieData(res.data));
    }

    //conditional decides what movie data to pull
    const movieData = (movie) => {
      switch (movie) {
        case "Avengers":
          return fetchData("5ecb0c83eed51c00048116f6");
        case "Gone Girl":
          return fetchData("5ecb0cb1eed51c00048116f7");
        case "Joker":
          return fetchData("5ecb0d0deed51c00048116f8");
        case "Midsommar":
          return fetchData("5ecb0d2eeed51c00048116f9");
        case "Parasite":
          return fetchData("5ecb0d47eed51c00048116fa");
        case "StarWars":
          return fetchData("5ecb0b1aeed51c00048116f5");
        default:
          return [];
      }
    };

    movieData(room);
  }, []);

  return (
    <div className="textContainer">
      {users ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}

      <div>
        <h1> {movieData.title}</h1>
        <p>Release Date: {movieData.releaseDate}</p>
        <p>Rating: {movieData.rating}</p>
        <p>Worldwide Gross: {movieData.gross}</p>
        <p>{movieData.summary}</p>
      </div>
    </div>
  );
};

export default TextContainer;
