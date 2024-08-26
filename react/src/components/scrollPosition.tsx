// Converted from src/app/theme/directives/scrollPosition.js

import React, { useEffect, useState } from 'react';

interface ScrollPositionProps {
  maxHeight: number;
  onScrollChange: (isScrolled: boolean) => void;
}

const ScrollPosition: React.FC<ScrollPositionProps> = ({ maxHeight, onScrollChange }) => {
  const [prevScrollTop, setPrevScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY > maxHeight;
      if (scrollTop !== prevScrollTop) {
        onScrollChange(scrollTop);
        setPrevScrollTop(scrollTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [maxHeight, onScrollChange, prevScrollTop]);

  return null;
};

export default ScrollPosition;
