import React from 'react';
import './popup.css'
const Popup = ({ imageUrl, onClose, onDownload }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <img className="popup-image" src={imageUrl} alt="Popup Image" />
        <div className="popup-buttons">
          <button className="download-button" onClick={onDownload}>Download</button>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
