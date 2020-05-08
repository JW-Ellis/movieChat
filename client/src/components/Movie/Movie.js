import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Movie.css";

const Movie = () => {
  return (
    <div className="movieOuterContainer">
      <h1>test</h1>
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
              <img src="../img/gonegirl.jpg" alt="Gone Girl movie Promo"></img>
            </figure>
          </li>
          <li>
            <figure>
              <img src="../img/joker.jpg" alt="Joker movie Promo"></img>
            </figure>
          </li>
          <li>
            <figure>
              <img src="../img/midsommar.jpg" alt="Midsommar movie Promo"></img>
            </figure>
          </li>
          <li>
            <figure>
              <img src="../img/parasite.jpg" alt="Parasite movie Promo"></img>
            </figure>
          </li>
          <li>
            <figure>
              <img src="../img/prestige.jpg" alt="Prestige movie Promo"></img>
            </figure>
          </li>
          <li>
            <figure>
              <img src="../img/psycho.jpg" alt="Psycho movie Promo"></img>
            </figure>
          </li>
          <li>
            <figure>
              <img src="../img/starwars.jpg" alt="Starwars movie Promo"></img>
            </figure>
          </li>
          <li>
            <figure>
              <img src="../img/tigerking.jpg" alt="Tiger King show Promo"></img>
            </figure>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Movie;
