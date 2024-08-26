// Converted from src/app/pages/components/mail/composeBox/composeBoxCtrl.js

import React from 'react';

interface ComposeBoxCtrlProps {
  subject: string;
  to: string;
  text: string;
}

const ComposeBoxCtrl: React.FC<ComposeBoxCtrlProps> = ({ subject, to, text }) => {
  return (
    <div>
      <h2>Compose Email</h2>
      <div>
        <label>Subject:</label>
        <input type="text" value={subject} readOnly />
      </div>
      <div>
        <label>To:</label>
        <input type="text" value={to} readOnly />
      </div>
      <div>
        <label>Text:</label>
        <textarea value={text} readOnly />
      </div>
    </div>
  );
};

export default ComposeBoxCtrl;
