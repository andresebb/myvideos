import React from "react";
import { connect } from "react-redux";
import "../assets/styles/Item.scss";
import { setFavorites, deleteFavorite } from "../actions/index";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove.png";

const Item = ({ title, image, created, id, setFavorites, deleteFavorite }) => {
  const handleSetFavorite = () => {
    setFavorites({
      title,
      image,
      created,
      id,
    });
  };

  const handleDeleteFavorite = (id) => {
    deleteFavorite(id);
  };

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
              onClick={handleSetFavorite}
            />
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              alt="Remove Icon"
              onClick={() => handleDeleteFavorite(id)}
            />
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{created}</p>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = {
  setFavorites,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(Item);
