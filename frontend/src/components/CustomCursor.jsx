import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const trailRef = useRef([]);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Add to trail
      trailRef.current = [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...trailRef.current.slice(0, 5)
      ];
      setTrails([...trailRef.current]);
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest('a, button, [data-hover="true"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.closest('a, button, [data-hover="true"]')) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeaveWindow = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Trail dots */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[9998] rounded-full bg-blue-400/30"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            width: 8 - index,
            height: 8 - index,
            opacity: isVisible ? (1 - index * 0.15) : 0,
            transition: 'opacity 0.1s ease-out',
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full mix-blend-difference transition-transform duration-150 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x - (isHovering ? 24 : 12),
          top: position.y - (isHovering ? 24 : 12),
          width: isHovering ? 48 : 24,
          height: isHovering ? 48 : 24,
          backgroundColor: 'white',
          transform: isClicking ? 'scale(0.8)' : 'scale(1)',
        }}
      />
      
      {/* Inner dot */}
      <div
        className={`fixed pointer-events-none z-[10000] rounded-full bg-blue-500 transition-all duration-75 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x - 3,
          top: position.y - 3,
          width: 6,
          height: 6,
          transform: isClicking ? 'scale(0.5)' : 'scale(1)',
        }}
      />
    </>
  );
};

export default CustomCursor;
