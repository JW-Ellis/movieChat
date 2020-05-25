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
          return fetchData("5ec1d39a65657107e890b382");
        case "Gone Girl":
          return fetchData("5ec1d60b00010d4e5c28438e");
        case "Joker":
          return fetchData("5ec1d68f00010d4e5c28438f");
        case "Midsommar":
          return fetchData("5ec1d73c00010d4e5c284390");
        case "Parasite":
          return fetchData("5ec1d79f00010d4e5c284391");
        case "StarWars":
          return fetchData("5ec1d81b00010d4e5c284392");
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
