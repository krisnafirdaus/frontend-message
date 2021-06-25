import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Masuk</h1>
        {/* <div className="form">
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form">
          <input
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
          <label for="email" class="form__label">
            Email
          </label>
        </div> */}
        <div class="form">
          <input
            type="text"
            id="name"
            class="form__input"
            autocomplete="off"
            placeholder=" "
            onChange={(event) => setName(event.target.value)}
          />
          <label for="name" class="form__label">
            Name
          </label>
        </div>
        <div class="form mt-6">
          <input
            type="text"
            id="room"
            class="form__input"
            autocomplete="off"
            placeholder=" "
            onChange={(event) => setRoom(event.target.value)}
          />
          <label for="room" class="form__label">
            Room
          </label>
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
            <button className="style-1 mt-20" type="submit">
              Masuk
            </button>
        </Link>
      </div>
    </div>
  );
}
