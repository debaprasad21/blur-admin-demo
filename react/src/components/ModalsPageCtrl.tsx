// Converted from src/app/pages/ui/modals/ModalsPageCtrl.js

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import useProgressModal from '../services/baProgressModal';

interface ModalsPageCtrlProps {
  items: any[];
}

const ModalsPageCtrl: React.FC<ModalsPageCtrlProps> = ({ items }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalPage, setModalPage] = useState<string>('');
  const [modalSize, setModalSize] = useState<string>('');
  const progressModal = useProgressModal();

  const open = (page: string, size: string) => {
    setModalPage(page);
    setModalSize(size);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => open('somePage', 'lg')}>Open Modal</button>
      <button onClick={progressModal.open}>Open Progress Dialog</button>

      <Modal show={showModal} onHide={handleClose} size={modalSize}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render the content of the modal based on modalPage */}
          {modalPage}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalsPageCtrl;
