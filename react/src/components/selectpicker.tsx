// Converted from src/app/pages/form/inputs/widgets/oldSelect/selectpicker.directive.js

import React, { useEffect, useRef } from 'react';
import { Multiselect } from 'react-bootstrap-multiselect';

interface SelectPickerProps {
  title?: string;
  value?: any;
  disabled?: boolean;
  onChange?: (value: any) => void;
}

const SelectPicker: React.FC<SelectPickerProps> = ({ title = 'Select something', value, disabled, onChange }) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (selectRef.current) {
      // Initialize the selectpicker
      $(selectRef.current).selectpicker({ dropupAuto: false, hideDisabled: true });

      // Refresh the selectpicker when value or disabled state changes
      $(selectRef.current).selectpicker('refresh');
    }
  }, [value, disabled]);

  return (
    <select
      ref={selectRef}
      value={value}
      disabled={disabled}
      onChange={(e) => onChange && onChange(e.target.value)}
      className="form-control"
    >
      <option data-hidden="true" disabled value="">
        {title}
      </option>
      {/* Add options here */}
    </select>
  );
};

export default SelectPicker;
