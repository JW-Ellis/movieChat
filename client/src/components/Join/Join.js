import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    const { room } = queryString.parse(window.location.search);

    setRoom(room);
  }, []);

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          {/* Sets name of user */}
          {/* <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          /> */}
          <p>{room}</p>
        </div>
        <div>
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
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
