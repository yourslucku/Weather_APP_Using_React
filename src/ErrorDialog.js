// error message if both city and zip code are filled.

import React from 'react';

const ErrorDialog = ({ message, onClose }) => {
  return (
    <div className="error-dialog">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ErrorDialog;
