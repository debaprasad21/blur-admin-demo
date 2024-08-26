// Converted from src/app/pages/ui/modals/notifications/NotificationsCtrl.js

import React from 'react';
import { toast } from 'react-toastify';

const NotificationsCtrl: React.FC = () => {
  
  const showSuccessMsg = () => {
    toast.success('Your information has been saved successfully!');
  };

  const showInfoMsg = () => {
    toast.info("You've got a new email!", { title: 'Information' });
  };

  const showErrorMsg = () => {
    toast.error("Your information hasn't been saved!", { title: 'Error' });
  };

  const showWarningMsg = () => {
    toast.warning('Your computer is about to explode!', { title: 'Warning' });
  };

  return (
    <div>
      <button onClick={showSuccessMsg}>Show Success Message</button>
      <button onClick={showInfoMsg}>Show Info Message</button>
      <button onClick={showErrorMsg}>Show Error Message</button>
      <button onClick={showWarningMsg}>Show Warning Message</button>
    </div>
  );
};

export default NotificationsCtrl;
