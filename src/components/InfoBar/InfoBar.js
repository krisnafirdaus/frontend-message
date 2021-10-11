import React from "react";

import "./InfoBar.css";

import closeIcon from "../Icon/closeIcon.png";
import onlineIcon from "../Icon/onlineIcon.png";

function InfoBar({ room }) {
    return (
        <div className="infoBar">
            <div className="leftInfobarContainer">
                <img src={onlineIcon} alt="Online" className="onlineIcon" />
                <h3>Room {room}</h3>
            </div>
            <div className="rightInfobarContainer">
                <a href="https://smartgen-web.netlify.app">
                    <img src={closeIcon} alt="Close" />
                </a>
            </div>
        </div>
    );
}

export default InfoBar;
