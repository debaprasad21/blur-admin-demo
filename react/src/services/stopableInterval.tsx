// Converted from src/app/theme/services/stopableInterval.js

import { useEffect, useRef } from 'react';

export default function useStopableInterval(callback: () => void, time: number) {
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function startInterval() {
      return setInterval(callback, time);
    }

    function handleFocus() {
      if (intervalId.current) clearInterval(intervalId.current);
      intervalId.current = startInterval();
    }

    function handleBlur() {
      if (intervalId.current) clearInterval(intervalId.current);
    }

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleBlur);

    intervalId.current = startInterval();

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleBlur);
    };
  }, [callback, time]);
}
