// Converted from src/app/pages/ui/modals/progressModal/ProgressModalCtrl.js

import React, { useEffect } from 'react';
import useProgressModal from '../services/baProgressModal';

const ProgressModalCtrl: React.FC = () => {
  const { setProgress, getProgress, close } = useProgressModal();

  useEffect(() => {
    setProgress(0);

    const changeValue = () => {
      if (getProgress() >= 100) {
        close();
      } else {
        setProgress(getProgress() + 10);
        setTimeout(changeValue, 300);
      }
    };

    changeValue();
  }, [setProgress, getProgress, close]);

  return null; // This component does not render anything itself
};

export default ProgressModalCtrl;
