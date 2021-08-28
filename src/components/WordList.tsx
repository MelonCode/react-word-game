import React from 'react';

interface WordListProps {
  words: string[];
  remainingWords: string[];
}

export const WordList: React.FC<WordListProps> = ({
  words,
  remainingWords
}) => (
  <div className="list-wrapper">
    <h2>Find Words</h2>
    <ol className="list">
      {words.map(word => (
        <li
          style={{
            textDecoration: remainingWords.includes(word)
              ? 'none'
              : 'line-through'
          }}
          key={word}
        >
          {word}
        </li>
      ))}
    </ol>
  </div>
);
