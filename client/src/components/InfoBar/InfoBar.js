import React from "react";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <p>{room} Chatroom</p>
  </div>
);

export default InfoBar;
