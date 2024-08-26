// Converted from src/app/pages/form/inputs/widgets/oldSwitches/switch.directive.js

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface SwitchProps {
  color?: string;
  initialChecked?: boolean;
}

const Switch: React.FC<SwitchProps> = ({ color = '', initialChecked = false }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={`switch-container ${color}`}>
      <Form.Check 
        type="switch"
        id="custom-switch"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};

export default Switch;
