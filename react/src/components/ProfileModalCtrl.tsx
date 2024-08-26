// Converted from src/app/pages/profile/ProfileModalCtrl.js

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ProfileModalCtrlProps {
  show: boolean;
  onClose: (link: string) => void;
}

const ProfileModalCtrl: React.FC<ProfileModalCtrlProps> = ({ show, onClose }) => {
  const [link, setLink] = useState('');

  const handleOk = () => {
    onClose(link);
  };

  return (
    <Modal show={show} onHide={() => onClose('')}>
      <Modal.Header closeButton>
        <Modal.Title>Profile Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Enter link"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onClose('')}>
          Close
        </Button>
        <Button variant="primary" onClick={handleOk}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModalCtrl;
