import React, { FC, TouchEventHandler, useEffect, useState } from 'react';
import { WordList } from './WordList';
import { DataStructure, WordLocationType } from './types';
import { getHighlightArray } from './utils';

interface GameComponentProps {
  level: number;
  onLevelComplete?: () => void;
  data: DataStructure;
}

export const GameComponent: FC<GameComponentProps> = ({
  level,
  data,
  onLevelComplete
}) => {
  const [mouseOver, setMouseOver] = useState(-1);
  const [dragStart, setDragStart] = useState(-1);
  const [isMouseDown, setMouseDown] = useState(false);

  const lineLength = data.character_grid[0].length;
  const characters = data.character_grid.flat();
  const indexes = characters.map((_, index) => index);

  const [matchedCells, setMatchedCells] = useState<number[]>([]);
  const [remainingWords, setRemainingWords] = useState<string[]>(
    Object.values(data.word_locations)
  );

  useEffect(() => {
    setMatchedCells([]);
    setRemainingWords(Object.values(data.word_locations));
  }, [data]);

  const highlight = isMouseDown
    ? getHighlightArray(dragStart, mouseOver, lineLength, indexes)
    : [];

  const checkMatch = () => {
    const coords = highlight.flatMap(value => [
      value % lineLength, // Get X value
      Math.trunc(value / lineLength) // Get Y Value
    ]);

    const key = coords.join(',') as WordLocationType;

    if (key in data.word_locations) {
      const targetWord = data.word_locations[key];

      setMatchedCells(currentMatched => [...currentMatched, ...highlight]);
      const wordsLeft = remainingWords.filter(word => word !== targetWord);
      setRemainingWords(wordsLeft);

      if (wordsLeft.length === 0) {
        onLevelComplete?.();
        console.log('match!', data.word_locations[key]);
      }
    }
  };

  const onMouseDown = (index: number) => {
    setMouseDown(true);
    setDragStart(index);
    setMouseOver(index);
  };

  const onMouseUp = () => {
    setMouseDown(false);
    setDragStart(-1);
    checkMatch();
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = e => {
    // get the touch element
    const touch = e.touches[0];

    // get the DOM element under current finger position
    const box = document.elementFromPoint(
      touch.clientX,
      touch.clientY
    ) as HTMLElement;

    // Get cell index from data attribute
    const value = box!.dataset.index;
    if (value != null) {
      const index = Number(value);
      setMouseOver(index);
    }
  };

  const getCellClass = (index: number) => {
    if (matchedCells.includes(index)) return 'match';
    if (highlight.includes(index)) return 'selected';
    return undefined;
  };

  return (
    <div
      onPointerUp={onMouseUp}
      onTouchEnd={onMouseUp}
      className="game-wrapper"
    >
      <div>
        <h2>
          Level {level + 1}. Source Word:{' '}
          <span style={{ textTransform: 'capitalize' }}>{data.word}</span>
        </h2>
        <div
          key={data.word}
          className="game"
          style={{ '--length': lineLength } as React.CSSProperties}
          onContextMenu={event => event.preventDefault()}
        >
          {characters.map((char, index) => {
            return (
              <div
                onPointerDown={() => onMouseDown(index)}
                onTouchStart={() => {
                  setMouseDown(true);
                  setMouseOver(index);
                }}
                onMouseOver={() => setMouseOver(index)}
                onTouchMove={handleTouchMove}
                data-index={index}
                className={getCellClass(index)}
                style={{ '--index': index } as React.CSSProperties}
                key={char + index}
              >
                {char}
              </div>
            );
          })}
        </div>
      </div>
      <WordList
        words={Object.values(data.word_locations)}
        remainingWords={remainingWords}
      />
    </div>
  );
};
