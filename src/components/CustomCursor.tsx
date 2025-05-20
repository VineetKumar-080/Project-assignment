import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        setIsPointer(computedStyle.cursor === 'pointer');
      }

      // Show cursor once it has moved
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const mouseDownHandler = () => setIsActive(true);
    const mouseUpHandler = () => setIsActive(false);
    const mouseLeaveHandler = () => setIsVisible(false);
    const mouseEnterHandler = () => setIsVisible(true);

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);
    window.addEventListener('mouseleave', mouseLeaveHandler);
    window.addEventListener('mouseenter', mouseEnterHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
      window.removeEventListener('mouseleave', mouseLeaveHandler);
      window.removeEventListener('mouseenter', mouseEnterHandler);
    };
  }, [isVisible]);

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-4 h-4 bg-amber-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isActive ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-10 h-10 border-2 border-amber-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isPointer ? 1.5 : isActive ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 150,
          mass: 0.8,
        }}
      />
    </>
  );
};

export default CustomCursor;