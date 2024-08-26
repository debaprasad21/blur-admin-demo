// Converted from src/app/theme/directives/autoExpand.js

import React, { useEffect, useRef } from 'react';

const AutoExpand: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const element = event.target as HTMLTextAreaElement;
      if (element) {
        element.style.height = '0px';
        const height = element.scrollHeight < 16 ? 16 : element.scrollHeight;
        element.style.height = `${height}px`;
      }
    };

    const element = textareaRef.current;
    if (element) {
      element.addEventListener('keydown', handleKeyDown);

      // Expand the textarea as soon as it is added to the DOM
      setTimeout(() => {
        element.style.height = '0px';
        const height = element.scrollHeight < 16 ? 16 : element.scrollHeight;
        element.style.height = `${height}px`;
      }, 0);
    }

    return () => {
      if (element) {
        element.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  return <textarea ref={textareaRef} />;
};

export default AutoExpand;
