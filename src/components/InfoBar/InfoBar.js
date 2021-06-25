import React from 'react';

import "./InfoBar.css";

import closeIcon from "../Icon/closeIcon.png";
import onlineIcon from "../Icon/onlineIcon.png";

function InfoBar({ room, user }) {
    return (
      <div className="infoBar">
        <div className="leftInfobarContainer">
          <img src={onlineIcon} alt="Online Icon" className="onlineIcon" />
          <h3>Room { room }</h3>
        </div>
        <div className="rightInfobarContainer">
                <a href="/"><img src={closeIcon} alt="Close Image" /></a>
        </div>
      </div>
    );
}

export default InfoBar;