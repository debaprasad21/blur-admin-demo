// Converted from src/app/theme/directives/autoFocus.js

import React, { useEffect, useRef } from 'react';

interface AutoFocusProps {
  shouldFocus: boolean;
  onBlur: () => void;
}

const AutoFocus: React.FC<AutoFocusProps> = ({ shouldFocus, onBlur }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [shouldFocus]);

  return (
    <input
      ref={inputRef}
      onBlur={() => {
        onBlur();
      }}
    />
  );
};

export default AutoFocus;
