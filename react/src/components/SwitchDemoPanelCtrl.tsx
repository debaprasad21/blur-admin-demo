// Converted from src/app/pages/form/inputs/widgets/switches/SwitchDemoPanelCtrl.js

import React, { useState } from 'react';

const SwitchDemoPanelCtrl: React.FC = () => {
  const [switches, setSwitches] = useState({
    s1: true,
    s2: false,
    s3: true,
    s4: true,
    s5: false
  });

  return (
    <div>
      <label>
        Switch 1:
        <input
          type="checkbox"
          checked={switches.s1}
          onChange={() => setSwitches({ ...switches, s1: !switches.s1 })}
        />
      </label>
      <label>
        Switch 2:
        <input
          type="checkbox"
          checked={switches.s2}
          onChange={() => setSwitches({ ...switches, s2: !switches.s2 })}
        />
      </label>
      <label>
        Switch 3:
        <input
          type="checkbox"
          checked={switches.s3}
          onChange={() => setSwitches({ ...switches, s3: !switches.s3 })}
        />
      </label>
      <label>
        Switch 4:
        <input
          type="checkbox"
          checked={switches.s4}
          onChange={() => setSwitches({ ...switches, s4: !switches.s4 })}
        />
      </label>
      <label>
        Switch 5:
        <input
          type="checkbox"
          checked={switches.s5}
          onChange={() => setSwitches({ ...switches, s5: !switches.s5 })}
        />
      </label>
    </div>
  );
};

export default SwitchDemoPanelCtrl;
