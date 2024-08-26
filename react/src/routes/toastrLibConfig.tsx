// Converted from src/app/theme/components/toastrLibConfig.js

import { ToastContainerProps } from 'react-toastify';

export const toastrLibConfig: ToastContainerProps = {
  closeButton: true,
  closeHtml: '<button>&times;</button>', // Note: This property is not directly supported in react-toastify
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: true,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  position: "top-right",
  limit: 0, // Equivalent to maxOpened
  preventDuplicates: false, // Note: This property is not directly supported in react-toastify
  containerId: 'toast-container',
  target: 'body'
};
