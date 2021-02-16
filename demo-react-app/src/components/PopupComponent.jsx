import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import UpdateForm from './upateForm'

const PopupComponent = ({ isOpen, onModal,empData }) => {
  console.log('Popup data and empData', empData);
  const closeModal = () => onModal({ empData: [], isOpenModal: false });

  return (
    <div>
      <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>
        <div>
          <button className='close' onClick={closeModal}>
            &times;
          </button>
          <UpdateForm empdata={empData} onCancel={closeModal}/>
        </div>
      </Popup>
    </div>
  );
};

export default PopupComponent;
