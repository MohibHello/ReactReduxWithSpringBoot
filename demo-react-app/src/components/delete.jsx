import React from 'react'
import {connect} from 'react-redux';
import {deleteEmployee, deleteEmployees} from '../redux'

const Delete = (props) => {

    const {empdata} = props 

    return (
        <i  style={{'cursor':'pointer', 'color':'red'}} onClick={() => props.deleteEmployees(empdata.id)} className="fa fa-trash" aria-hidden="true"></i>
    )
}

const mapStateToProps = (state) => {
  console.log('delete state', state.employee);
  return {
    numberOfEmployees: state.employee.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      deleteEmployees: (id) => dispatch(deleteEmployees(id))
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Delete);
