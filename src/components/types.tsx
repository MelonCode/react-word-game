export type WordLocationType =
  `${number},${number},${number},${number},${number},${number}`;

/**
 * @field word_locations a dictionary where each key is a list of coordinates in the format: x1, y1, x2, y2, ..., xn, yn and the value is the target word in that location.
 */
export interface DataStructure {
  word: string;
  character_grid: string[][];
  target_language: string;
  source_language: string;
  word_locations: Record<WordLocationType, string>;
}

export type DragMode = 'horizontal' | 'vertical' | 'diagonal';
