import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Card = ({ username, image, bio, route }) => {
  return (
    <a href={route}>
      <div className="card">
        <div className="details">
          <img
            src={image}
            alt="imagem de perfil"
          />
          <div>
            <p>{username}</p>
            <p>{bio}</p>
          </div>
        </div>

        <span className="material-symbols-outlined">chevron_right</span>
      </div>
    </a>
  );
};

export default Card;
