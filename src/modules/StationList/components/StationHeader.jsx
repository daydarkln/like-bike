import React from 'react';

const StationHeader = props => {
  return (
    <header className="stations__header">
      <h2>{props.currentStationName}</h2>
      <p>Total bikes: {props.totalBikes}</p>
    </header>
  );
};

export default StationHeader;
