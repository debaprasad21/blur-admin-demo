// Converted from src/app/theme/directives/trackWidth.js

import React, { useState, useEffect } from 'react';

interface TrackWidthProps {
  minWidth: number;
}

const TrackWidth: React.FC<TrackWidthProps> = ({ minWidth }) => {
  const [trackWidth, setTrackWidth] = useState<boolean>(window.innerWidth < minWidth);

  useEffect(() => {
    const handleResize = () => {
      const newTrackWidth = window.innerWidth < minWidth;
      if (newTrackWidth !== trackWidth) {
        setTrackWidth(newTrackWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [minWidth, trackWidth]);

  return (
    <div>
      {trackWidth ? 'Width is less than minimum width' : 'Width is greater than or equal to minimum width'}
    </div>
  );
};

export default TrackWidth;
