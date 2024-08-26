// Converted from src/app/pages/form/inputs/widgets/oldSwitches/OldSwitchPanelCtrl.js

import React, { useState } from 'react';

const OldSwitchPanelCtrl: React.FC = () => {
  const [switcherValues, setSwitcherValues] = useState({
    primary: true,
    warning: true,
    danger: true,
    info: true,
    success: true,
  });

  return (
    <div>
      {/* Render switcher values or controls here */}
      {/* Example: */}
      <div>
        <label>
          Primary:
          <input
            type="checkbox"
            checked={switcherValues.primary}
            onChange={() =>
              setSwitcherValues((prevValues) => ({
                ...prevValues,
                primary: !prevValues.primary,
              }))
            }
          />
        </label>
      </div>
      {/* Repeat similar blocks for warning, danger, info, and success */}
    </div>
  );
};

export default OldSwitchPanelCtrl;
