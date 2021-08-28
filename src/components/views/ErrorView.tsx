import React, { FC } from 'react';

export const ErrorView: FC = () => (
  <div className="app">
    <h2> An error occurred while loading game data :( </h2>
    <h3>You can try again by reloading page!</h3>
  </div>
);
