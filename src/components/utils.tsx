import { DragMode } from './types';

import React, { useCallback, useEffect, useState } from 'react';

export function useDeviceDetect() {
  const [isMobile, setMobile] = React.useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobile = Boolean(
      userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
}

// Safari friendly :(
export function useScreenOrientation() {
  const getOrientation = () =>
    window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';

  const [orientation, setOrientation] = useState(getOrientation());

  const updateOrientation = useCallback(
    () => setOrientation(() => getOrientation()),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', updateOrientation);
    return () => {
      window.removeEventListener('resize', updateOrientation);
    };
  }, [updateOrientation]);

  return orientation;
}

function getDragMode(x1: number, y1: number, x2: number, y2: number): DragMode {
  if (x1 !== x2) {
    if (y1 === y2) {
      return 'horizontal';
    } else {
      return 'diagonal';
    }
  }
  return 'vertical';
}

export function getHighlightArray(
  startIndex: number,
  currentIndex: number,
  lineLength: number,
  indexes: number[]
) {
  const x1 = startIndex % lineLength;
  const y1 = Math.trunc(startIndex / lineLength);
  const x2 = currentIndex % lineLength;
  const y2 = Math.trunc(currentIndex / lineLength);

  const dragMode = getDragMode(x1, y1, x2, y2);

  switch (dragMode) {
    case 'horizontal': {
      const minX = Math.min(startIndex, currentIndex);
      const maxX = Math.max(startIndex, currentIndex);
      return indexes.slice(minX, maxX + 1);
    }
    case 'vertical': {
      const result = [];
      const minY = Math.min(y1, y2);
      const maxY = Math.max(y1, y2);

      for (let i = minY; i <= maxY; i++) {
        result.push(lineLength * i + x1);
      }

      return result.sort((a, b) => a - b);
    }
    case 'diagonal': {
      const result = [];
      const minY = Math.min(y1, y2);
      const maxY = Math.max(y1, y2);
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);
      const maxDiff = Math.max(maxX - minX, maxY - minY);

      const vD = y2 > y1 ? 1 : -1;
      const hD = x2 > x1 ? 1 : -1;

      for (let i = 0; i <= maxDiff; i++) {
        const nextY = lineLength * i * vD;
        const nextX = i * hD;
        const nextValue = startIndex + nextY + nextX;

        // Overflow prevention
        if (x1 + nextX >= lineLength || x1 + nextX < 0) break;
        if (nextValue > indexes.length || nextValue < 0) break;

        result.push(nextValue);
      }

      return result.sort((a, b) => a - b);
    }
  }
}
