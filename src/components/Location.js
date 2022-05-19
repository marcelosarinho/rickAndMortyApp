import React from "react";

const Location = (props) => {

  const { location } = props;

  return (
    <div className="location-card">
      <div className="location-header">
        <h2>{location.name}</h2>
      </div>
      <div className="location-info">
        <p>ID: {location.id}</p>
        {location.type === "unknown" ? (
          <p>Tipo: Desconhecido</p>
        ) : (
          <p>Tipo: {location.type}</p>
        )}
        {location.dimension === "unknown" ? (
          <p>Dimensão: Desconhecida</p>
        ) : (
          <p>Dimensão: {location.dimension}</p>
        )}
      </div>
    </div>
  )
}

export default Location;