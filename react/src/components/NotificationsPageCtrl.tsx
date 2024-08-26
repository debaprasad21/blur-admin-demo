// Converted from src/app/pages/ui/notifications/NotificationsPageCtrl.js

import React, { useState, useEffect } from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Quote {
  title: string | null;
  message: string;
  options?: ToastOptions;
}

const NotificationsPageCtrl: React.FC = () => {
  const defaultOptions: ToastOptions = {
    autoClose: 5000,
    position: "top-right",
    type: "info",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    newestOnTop: true,
  };

  const [types] = useState(['success', 'error', 'info', 'warning']);
  const [quotes] = useState<Quote[]>([
    {
      title: 'Come to Freenode',
      message: 'We rock at <em>#angularjs</em>',
      options: {
        dangerouslyAllowHtml: true
      }
    },
    {
      title: 'Looking for bootstrap?',
      message: 'Try ui-bootstrap out!'
    },
    {
      title: 'Wants a better router?',
      message: 'We have you covered with ui-router'
    },
    {
      title: 'Angular 2',
      message: 'Is gonna rock the world'
    },
    {
      title: null,
      message: 'Titles are not always needed'
    },
    {
      title: null,
      message: 'Toastr rock!'
    },
    {
      title: 'What about nice html?',
      message: '<strong>Sure you <em>can!</em></strong>',
      options: {
        dangerouslyAllowHtml: true
      }
    },
    {
      title: 'Ionic is <em>cool</em>',
      message: 'Best mobile framework ever',
      options: {
        dangerouslyAllowHtml: true
      }
    }
  ]);

  const [openedToasts, setOpenedToasts] = useState<React.ReactText[]>([]);
  const [options, setOptions] = useState<ToastOptions>(defaultOptions);
  const [optionsStr, setOptionsStr] = useState<string>("");

  const clearLastToast = () => {
    const lastToast = openedToasts.pop();
    if (lastToast) {
      toast.dismiss(lastToast);
      setOpenedToasts([...openedToasts]);
    }
  };

  const clearToasts = () => {
    toast.dismiss();
    setOpenedToasts([]);
  };

  const openRandomToast = () => {
    const typeIndex = Math.floor(Math.random() * types.length);
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const toastType = types[typeIndex];
    const toastQuote = quotes[quoteIndex];
    const toastId = toast[toastType](toastQuote.message, {
      ...toastQuote.options,
      ...options
    });
    setOpenedToasts([...openedToasts, toastId]);
    setOptionsStr(`toast.${toastType}('${toastQuote.message}', ${JSON.stringify(toastQuote.options || {}, null, 2)})`);
  };

  const openToast = () => {
    const toastId = toast[options.type || 'info'](options.msg || "Type your message here", {
      ...options
    });
    setOpenedToasts([...openedToasts, toastId]);
    const strOptions: Partial<ToastOptions> = { ...options };
    delete strOptions.msg;
    delete strOptions.title;
    setOptionsStr(`toast.${options.type}('${options.msg}', '${options.title}', ${JSON.stringify(strOptions, null, 2)})`);
  };

  useEffect(() => {
    return () => {
      // Cleanup on component unmount
      setOptions(defaultOptions);
    };
  }, []);

  return (
    <div>
      <button onClick={openRandomToast}>Open Random Toast</button>
      <button onClick={openToast}>Open Toast</button>
      <button onClick={clearLastToast}>Clear Last Toast</button>
      <button onClick={clearToasts}>Clear All Toasts</button>
      <ToastContainer />
      <pre>{optionsStr}</pre>
    </div>
  );
};

export default NotificationsPageCtrl;
