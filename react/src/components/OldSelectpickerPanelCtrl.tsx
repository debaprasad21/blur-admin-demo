// Converted from src/app/pages/form/inputs/widgets/oldSelect/OldSelectpickerPanelCtrl.js

import React from 'react';

interface SelectItem {
  label: string;
  value: number;
  group?: string;
}

const OldSelectpickerPanelCtrl: React.FC = () => {
  const standardSelectItems: SelectItem[] = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
  ];

  const selectWithSearchItems: SelectItem[] = [
    { label: 'Hot Dog, Fries and a Soda', value: 1 },
    { label: 'Burger, Shake and a Smile', value: 2 },
    { label: 'Sugar, Spice and all things nice', value: 3 },
    { label: 'Baby Back Ribs', value: 4 },
  ];

  const groupedSelectItems: SelectItem[] = [
    { label: 'Group 1 - Option 1', value: 1, group: 'Group 1' },
    { label: 'Group 2 - Option 2', value: 2, group: 'Group 2' },
    { label: 'Group 1 - Option 3', value: 3, group: 'Group 1' },
    { label: 'Group 2 - Option 4', value: 4, group: 'Group 2' },
  ];

  return (
    <div>
      {/* Render logic for select items can be added here */}
    </div>
  );
};

export default OldSelectpickerPanelCtrl;
