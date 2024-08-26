// Converted from src/app/theme/services/fileReader.js

import { useState } from 'react';

export default function useFileReader() {
  const [fileData, setFileData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);

  const readAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        setFileData(reader.result as string);
        resolve(reader.result as string);
      };

      reader.onerror = () => {
        setError('Error reading file');
        reject('Error reading file');
      };

      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentLoaded = Math.round((event.loaded / event.total) * 100);
          setProgress(percentLoaded);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return {
    fileData,
    error,
    progress,
    readAsDataURL,
  };
}
