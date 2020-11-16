import React from "react";
import "../assets/styles/Item.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";

const Item = ({ title, image, created }) => {
  return (
    <>
      <div className="carousel-item">
        <img className="carousel-item__img" src={image} alt="" />
        <div className="carousel-item__details">
          <div>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
            />
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{created}</p>
        </div>
      </div>
    </>
  );
};

export default Item;
