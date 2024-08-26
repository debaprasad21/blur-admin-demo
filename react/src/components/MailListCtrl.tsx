// Converted from src/app/pages/components/mail/list/MailListCtrl.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mailMessages from '../services/mailMessages';

const MailListCtrl: React.FC = () => {
  const { label } = useParams<{ label: string }>();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (label) {
      const fetchedMessages = mailMessages.getMessagesByLabel(label);
      setMessages(fetchedMessages);
    }
  }, [label]);

  return (
    <div>
      <h1>{label}</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default MailListCtrl;
