import React from 'react';

const Update = ({ openModalItem, empdata, isOpenModal }) => {

    // console.log('isOpenModal', isOpenModal)
    // console.log('openModalItem', openModalItem)
    // console.log('empdata', empdata)
  return (
    <div>
      <i
        className='fa fa-pencil'
        onClick={() =>openModalItem({empData:empdata,isOpenModal:true})}
        style={{ cursor: 'pointer', color: 'blue' }}
        aria-hidden='true'
      ></i>
    </div>
  );
};

export default Update;
