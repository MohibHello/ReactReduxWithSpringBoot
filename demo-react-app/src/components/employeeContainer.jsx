import React, {useState ,useEffect} from 'react';
import { connect } from 'react-redux';
import 'reactjs-popup/dist/index.css';
import { fetchEmployees } from '../redux';
import Content from './content';
import TableBody from './tableBody';
import TableHead from './tableHead';
import Popup from './PopupComponent';

function EmployeeContainer(props) {
  const tableHeadData = [
    'Id',
    'First Name',
    'Last Name',
    'Designation',
    'Email',
    'Address',
    'Active',
    '',
    '',
  ];

  const [modalData, setModalData] = useState({empData:[],isOpenModal:false})

  const handleModal = (data) =>{
    console.log('EC', data)
    setModalData(data)
  }

  useEffect(() => {
    console.log(props.numberOfEmployees)
    props.fetchEmployees()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      <h1>Employees </h1>
      <Popup isOpen={modalData.isOpenModal} empData={modalData.empData} onModal={handleModal} />
      {/* <button onClick={props.fetchEmployees}>abc</button> */}
      <div className='row'>
        <div className='col-2'>
          <Content />
        </div>
        <div className='col'>
          <table className='table'>
            <TableHead tableHeadData={tableHeadData} />
            <TableBody tableBodyData={props.numberOfEmployees} openModal={handleModal}  isOpen={modalData}/>
          </table>
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('here state', state.employee);
  return {
    numberOfEmployees: state.employee.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer);
