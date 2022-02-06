import React from "react";

export const Tile = ({tile}) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, i) => {
        return <p key={i} className={`${i === 0 ? "tile-title" : "title"}`}>
          {value}
        </p>
      })}
    </div>
  );
};
