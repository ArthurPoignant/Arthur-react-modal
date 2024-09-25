import React from 'react';
import './Modal.css';

// - isOpen: controls whether the modal is visible
// - onClose: function to close the modal
// - children: any content to be displayed inside the modal
const Modal = ({ isOpen, onClose, children }) => {
  // If the modal is not open, return null to render nothing
  if (!isOpen) return null;

  // If the modal is open, render the modal overlay and content
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {/* Render any children elements passed into the Modal component */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
