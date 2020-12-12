import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Terminator = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    setRoom("Terminator");
  }, []);

  return (
    <div className="joinOuterContainer">
      <div className="secondaryHeader">
        <a href="/">
          <div className="secondaryImg"></div>
        </a>
      </div>
      <div className="signIn">
        <div className="posterContainer">
          <figure>
            <img
              className="joinPoster"
              src="../img/terminator.jpg"
              alt="The Terminator movie promo"
            />
          </figure>
        </div>
        <div className="joinInnerContainer">
          <div className="joinTitle">
            <div className="admit"></div>
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
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="button mt-20" type="submit">
              Enter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terminator;