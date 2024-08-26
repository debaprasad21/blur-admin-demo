// Converted from src/app/pages/components/mail/detail/MailDetailCtrl.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mailMessages from '../services/mailMessages';

interface MailDetailProps {
  label: string;
}

const MailDetailCtrl: React.FC<MailDetailProps> = () => {
  const { id, label } = useParams<{ id: string; label: string }>();
  const [mail, setMail] = useState(null);

  useEffect(() => {
    const fetchMail = async () => {
      const message = await mailMessages.getMessageById(id);
      setMail(message);
    };

    fetchMail();
  }, [id]);

  return (
    <div>
      <h1>{label}</h1>
      {mail ? (
        <div>
          <h2>{mail.subject}</h2>
          <p>{mail.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MailDetailCtrl;
