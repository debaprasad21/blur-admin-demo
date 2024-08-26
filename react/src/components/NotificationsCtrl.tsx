// Converted from src/app/pages/ui/modals/notifications/notifications.html

import React from 'react';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';

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
    <div className="modal-buttons same-width clearfix">
      <Button variant="success" onClick={showSuccessMsg}>Success Notification</Button>
      <Button variant="info" onClick={showInfoMsg}>Info Notification</Button>
      <Button variant="warning" onClick={showWarningMsg}>Warning Notification</Button>
      <Button variant="danger" onClick={showErrorMsg}>Danger Notification</Button>
    </div>
  );
};

export default NotificationsCtrl;
