import React, { FC } from 'react';

export const CongratulationsView: FC = () => (
  <div className="app">
    <img
      className="hat"
      width={200}
      height={200}
      src="/hat.svg"
      alt="Sombrero"
    />
    <h2> Congratulations! </h2>
    <h3> You just beat the game. </h3>
  </div>
);
