// Converted from src/app/theme/inputs/baSwitcher/baSwitcher.js

import React, { useState } from 'react';

interface BaSwitcherProps {
  switcherStyle?: string;
  switcherValue: boolean;
  onChange: (value: boolean) => void;
}

const BaSwitcher: React.FC<BaSwitcherProps> = ({ switcherStyle, switcherValue, onChange }) => {
  const [value, setValue] = useState(switcherValue);

  const handleToggle = () => {
    const newValue = !value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={`ba-switcher ${switcherStyle}`} onClick={handleToggle}>
      <div className={`switcher-toggle ${value ? 'on' : 'off'}`}></div>
    </div>
  );
};

export default BaSwitcher;
