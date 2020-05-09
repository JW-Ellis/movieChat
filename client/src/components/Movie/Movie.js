import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Movie.css";

const Movie = () => {
  return (
    <div className="movieOuterContainer">
      <div>
        <h1>test</h1>
      </div>
      <section className="moviePosters" id="moviePosters">
        <ul>
          <li>
            <figure>
              <Link to={`/join?room=avengers`}>
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
              <Link to={`/join?room=gonegirl`}>
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
              <Link to={`/join?room=joker`}>
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
              <Link to={`/join?room=midsommar`}>
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
              <Link to={`/join?room=parasite`}>
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
              <Link to={`/join?room=prestige`}>
                <img
                  className="poster"
                  src="../img/prestige.jpg"
                  alt="Prestige movie Promo"
                ></img>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link to={`/join?room=psycho`}>
                <img
                  className="poster"
                  src="../img/psycho.jpg"
                  alt="Psycho movie Promo"
                ></img>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link to={`/join?room=starwars`}>
                <img
                  className="poster"
                  src="../img/starwars.jpg"
                  alt="Starwars movie Promo"
                ></img>
              </Link>
            </figure>
          </li>
          <li>
            <figure>
              <Link to={`/join?room=tigerking`}>
                <img
                  className="poster"
                  src="../img/tigerking.jpg"
                  alt="Tiger King show Promo"
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
