// Converted from src/app/theme/components/progressBarRound/progressBarRound.directive.js

import React, { useEffect, useRef } from 'react';
import useProgressModal from '../services/baProgressModal';

const ProgressBarRound: React.FC = () => {
  const { getProgress } = useProgressModal();
  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const animateBar = () => {
      if (circleRef.current) {
        const progress = getProgress();
        circleRef.current.setAttribute(
          'stroke-dasharray',
          `${progress * 180 * Math.PI / 100}, 20000`
        );
      }
    };

    animateBar();
    // Assuming there's a mechanism to trigger re-render or re-call animateBar when progress changes
  }, [getProgress]);

  return (
    <svg>
      <circle id="loader" ref={circleRef} />
    </svg>
  );
};

export default ProgressBarRound;
