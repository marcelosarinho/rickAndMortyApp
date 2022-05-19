import React from "react";

const Episode = (props) => {

  const { episode } = props;

  return (
    <div className="episode-card">
      <div className="episode-header">
        <h2>{episode.name}</h2>
      </div>
      <div className="episode-info">
        <p>ID: {episode.id}</p>
        <p>Data que foi ao ar: {episode.air_date}</p>
        <p>Episódio: {episode.episode}</p>
      </div>
    </div>
  )
}

export default Episode;