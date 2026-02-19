import React, { useState, useEffect, useRef } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

const TextScramble = ({ text, className = '', as: Component = 'span', triggerOnHover = true }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef(0);
  const queueRef = useRef([]);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    const oldText = displayText;
    const newText = text;
    const length = Math.max(oldText.length, newText.length);
    
    queueRef.current = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queueRef.current.push({ from, to, start, end });
    }

    frameRef.current = 0;
    update();
  };

  const update = () => {
    let output = '';
    let complete = 0;

    for (let i = 0; i < queueRef.current.length; i++) {
      const { from, to, start, end } = queueRef.current[i];
      
      if (frameRef.current >= end) {
        complete++;
        output += to;
      } else if (frameRef.current >= start) {
        if (to !== ' ') {
          output += chars[Math.floor(Math.random() * chars.length)];
        } else {
          output += ' ';
        }
      } else {
        output += from;
      }
    }

    setDisplayText(output);

    if (complete < queueRef.current.length) {
      frameRef.current++;
      requestAnimationFrame(update);
    } else {
      setIsScrambling(false);
    }
  };

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      scramble();
    }
  };

  return (
    <Component 
      className={className}
      onMouseEnter={handleMouseEnter}
      style={{ fontFamily: 'inherit' }}
    >
      {displayText}
    </Component>
  );
};

export default TextScramble;
