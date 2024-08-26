// Converted from src/app/pages/ui/buttons/ButtonPageCtrl.js

import React, { useState, useEffect } from 'react';

const ButtonPageCtrl: React.FC = () => {
  const [progress, setProgress] = useState(false);

  const progressFunction = () => {
    setProgress(true);
    setTimeout(() => {
      setProgress(false);
    }, 3000);
  };

  useEffect(() => {
    // Any additional effects can be added here
  }, []);

  return (
    <div>
      <button onClick={progressFunction}>
        {progress ? 'Loading...' : 'Click Me'}
      </button>
    </div>
  );
};

export default ButtonPageCtrl;
