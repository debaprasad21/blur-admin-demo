// Converted from src/app/theme/directives/ngFileSelect.js

import React, { useState } from 'react';

interface NgFileSelectProps {
  onFileSelect: (file: File) => void;
}

const NgFileSelect: React.FC<NgFileSelectProps> = ({ onFileSelect }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <input type="file" onChange={handleChange} />
  );
};

export default NgFileSelect;
