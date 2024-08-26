// Converted from src/app/theme/directives/animatedChange.js

import React, { useEffect, useState } from 'react';

interface AnimatedChangeProps {
  newValue: number;
}

const AnimatedChange: React.FC<AnimatedChangeProps> = ({ newValue }) => {
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const changeValue = (val: number) => {
      timeoutId = setTimeout(() => {
        setCurrentValue(val);
      }, 30);
    };

    if (newValue > currentValue) {
      for (let i = currentValue; i <= newValue; i++) {
        changeValue(i);
      }
    } else {
      for (let j = currentValue; j >= newValue; j--) {
        changeValue(j);
      }
    }

    const showArrowTimeout = setTimeout(() => {
      // Assuming there's a way to add 'show-arr' class to an element
      // This part of the code would need to be adapted based on the actual DOM structure
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(showArrowTimeout);
    };
  }, [newValue, currentValue]);

  return <div>{currentValue}</div>;
};

export default AnimatedChange;
