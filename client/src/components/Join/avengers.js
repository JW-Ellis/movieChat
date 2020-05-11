import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Avengers = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    setRoom("Avengers");
  }, []);
  console.log(room);
  return (
    <div className="joinOuterContainer">
      <div className="title">
        <h1 className="heading">Join the Avengers chatroom!</h1>
      </div>
      <div className="joinInnerContainer">
        <div>{/* Sets name of user */}</div>
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
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Avengers;
