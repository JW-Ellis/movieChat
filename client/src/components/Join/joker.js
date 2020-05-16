import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Joker = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    setRoom("Joker");
  }, []);

  return (
    <div className="joinOuterContainer">
      <div className="posterContainer">
        <figure>
          <img
            className="joinPoster"
            src="../img/joker.jpg"
            alt="Joker movie promo"
          />
        </figure>
      </div>
      <div className="joinInnerContainer">
        <div className="joinTitle">
          <h1>Sign in! </h1>
        </div>
        <div>
          <p></p>
          {/* Sets chatroom name */}
          <input
            placeholder="User Name"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <Link
          // If name and chat room params provided redirect to chat endpoint otherwise do not redirect
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Joker;