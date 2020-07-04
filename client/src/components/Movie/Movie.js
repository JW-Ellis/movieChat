import React from "react";
import { Link } from "react-router-dom";

import "./Movie.css";

const Movie = () => {
  return (
    <div className="movieOuterContainer">
      <div className="header">
        <div className="headerImg"></div>
      </div>
      <section className="moviePosters" id="moviePosters">
        <ul>
          <li>
            <figure>
              <Link to={`/avengers`}>
                <img
                  className="poster"
                  src="../img/avengers.jpg"
                  alt="Avengers movie Promo"
                ></img>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link to={`/gonegirl`}>
                <img
                  className="poster"
                  src="../img/gonegirl.jpg"
                  alt="Gone Girl movie Promo"
                ></img>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link to={`/joker`}>
                <img
                  className="poster"
                  src="../img/joker.jpg"
                  alt="Joker movie Promo"
                ></img>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link to={`/midsommar`}>
                <img
                  className="poster"
                  src="../img/midsommar.jpg"
                  alt="Midsommar movie Promo"
                ></img>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link to={`/parasite`}>
                <img
                  className="poster"
                  src="../img/parasite.jpg"
                  alt="Parasite movie Promo"
                ></img>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link to={`/starwars`}>
                <img
                  className="poster"
                  src="../img/starwars.jpg"
                  alt="Starwars movie Promo"
                ></img>
              </Link>
            </figure>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Movie;
