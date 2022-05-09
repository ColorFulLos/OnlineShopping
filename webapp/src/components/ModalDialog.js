
import React from 'react';
// import Dialog from '@material-ui/core/Dialog';
import Form from './SignUpForm';

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <div open={open} onClose={handleClose}>
      <Form handleClose={handleClose} />
    </div>
  );
};

export default ModalDialog;