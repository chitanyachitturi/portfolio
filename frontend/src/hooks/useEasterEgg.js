import { useState, useCallback, useRef } from 'react';

export const useEasterEgg = (requiredClicks = 3, timeWindow = 2000) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const clickCountRef = useRef(0);
  const timerRef = useRef(null);

  const handleClick = useCallback(() => {
    clickCountRef.current += 1;

    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Check if we've reached required clicks
    if (clickCountRef.current >= requiredClicks) {
      setIsTriggered(true);
      clickCountRef.current = 0;
      return;
    }

    // Reset after time window
    timerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, timeWindow);
  }, [requiredClicks, timeWindow]);

  const reset = useCallback(() => {
    setIsTriggered(false);
    clickCountRef.current = 0;
  }, []);

  return { isTriggered, handleClick, reset };
};
