// Converted from src/app/theme/services/baProgressModal.js

import { useState } from 'react';
import { Modal } from 'react-bootstrap';

interface ProgressModalService {
  setProgress: (value: number) => void;
  getProgress: () => number;
  open: () => void;
  close: () => void;
}

const useProgressModal = (): ProgressModalService => {
  const [progress, setProgressState] = useState<number>(0);
  const [opened, setOpened] = useState<boolean>(false);

  const max = 100;

  const setProgress = (value: number) => {
    if (value > max) {
      throw new Error("Progress can't be greater than max");
    }
    setProgressState(value);
  };

  const getProgress = () => {
    return progress;
  };

  const open = () => {
    if (!opened) {
      setOpened(true);
    } else {
      throw new Error('Progress modal opened now');
    }
  };

  const close = () => {
    if (opened) {
      setOpened(false);
    } else {
      throw new Error('Progress modal is not active');
    }
  };

  return {
    setProgress,
    getProgress,
    open,
    close,
  };
};

export default useProgressModal;
