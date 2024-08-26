// Converted from src/app/pages/components/mail/composeBox/composeModal.js

import { Modal } from 'react-bootstrap';

interface ComposeModalOptions {
  subject: string;
  to: string;
  text: string;
}

const composeModal = (options: ComposeModalOptions) => {
  const { subject, to, text } = options;

  // Assuming a function to open a modal using react-bootstrap
  const openModal = () => {
    return (
      <Modal show={true} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Compose Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
    );
  };

  return openModal;
};

export default composeModal;
