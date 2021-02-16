import React from 'react';
import Delete from './delete';
import Update from './update';

const TableBody = (props) => {
  const { openModal, isOpen } = props;

  return (
    <tbody>
      {props.tableBodyData.map((emp) => (
        <tr key={emp.id}>
          <th>{emp.id}</th>
          <th>{emp.firstName}</th>
          <th>{emp.lastName}</th>
          <th>{emp.designation}</th>
          <th>{emp.email}</th>
          <th>{emp.address}</th>
          <th>
            {emp.active ? (
              <i
                class='fa fa-smile-o'
                style={{ color: 'green' }}
                aria-hidden='true'
              ></i>
            ) : (
              <i
                class='fa fa-frown-o'
                style={{ color: 'red' }}
                aria-hidden='true'
              ></i>
            )}
          </th>
          <th>
            <Delete empdata={emp} />
          </th>
          <th>
            <Update
              empdata={emp}
              isOpenModal={isOpen}
              openModalItem={openModal}
            />
          </th>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
