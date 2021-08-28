import React, { FC } from 'react';

type StartScreenViewProps = { onClick: () => void };

export const StartScreenView: FC<StartScreenViewProps> = ({ onClick }) => (
  <div onClick={onClick} className="app">
    <h2> Play Game! </h2>
    <h3> Click anywhere to start the game</h3>

    <a
      onClick={e => e.stopPropagation()}
      className="src-link"
      href="https://github.com/MelonCode/react-word-game"
    >
      <img alt="Logo" src="/octocat.png" />
      Source Code
    </a>
  </div>
);
