import React from "react";

const Player = () => {
  return (
    <>
      <div className="player">
        <h3>Titulo</h3>
        <h6></h6>
        <audio controls autoPlay={false}>
          <source src={clip.urls.high_mp3} type="audio/mpeg" />
        </audio>
      </div>
      <button type="button" onClick={() => props.history.goBack()}>
        Regresar
      </button>
    </>
  );
};

export default Player;
