import React, { useState } from 'react';
import { connect } from 'react-redux';
import './css/login.css';
import { updateEmployees } from '../redux';

const UpdateForm = (props) => {
  console.log('updateForm', props);

  let empObject = {
    empid: props.empdata.id,
    firstName: props.empdata.firstName,
    lastName: props.empdata.lastName,
    designation: props.empdata.designation,
    email:props.empdata.email,
    address:props.empdata.address,
    active:props.empdata.active,
  };

  const [formData, setFormData] = useState(empObject);

  const [isChecked,setIsChecked] = useState(true);

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    console.log('update form', formData);
    console.log('submitted', props);
    props.updateEmployees(formData);
    onCancel();
  };

  const onChange = (e) => {
    console.log(" chk  ",e.target.name,e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'active') {
      setIsChecked(!isChecked)
    }
  };

  const onCancel = (e) => {
    debugger;
    console.log('cancle clicked', props);
    props.onCancel();
  };

  return (
      <div className='container'>
        <div className='login-form'>
          <div >
            <div className='panel'>
              <h2>Employee Registration</h2>
              <p>Please enter the details</p>
            </div>
            <form id='Login' className='form-container w-100' onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='inputFirstName'
                  name='firstName'
                  placeholder='First Name'
                  onChange={onChange}
                  value={formData.firstName}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='inputLastName'
                  name='lastName'
                  placeholder='Last Name'
                  onChange={onChange}
                  value={formData.lastName}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='inputDesignation'
                  name='designation'
                  placeholder='Designation'
                  onChange={onChange}
                  value={formData.designation}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='inputAddress'
                  name='address'
                  placeholder='Address'
                  onChange={onChange}
                  value={formData.address}
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  readOnly
                  className='form-control'
                  id='inputEmail'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor="active" className='float-left'>Active:</label>
               {/* <select name="active" value={formData.active} onChange={onChange} className='w-50' id="active">
                 <option value={true}>True</option>
                 <option value={false}>False</option>
               </select> */}
               <label htmlFor="active">Yes</label>
               <input type="radio" value={true} checked={formData.active && isChecked ?true:false} onChange={onChange} name="active" id="active"/>
               <label htmlFor="active2">No</label>
               <input type="radio" value={false} checked={formData.active && isChecked ?false:true} onChange={onChange} name="active" id="active2"/>
              </div>
            
              <div className='mt-2 '>
              <button type='submit' className='btn btn-primary w-25 mr-5'>
                Register
              </button>
              <button type='button' onClick={onCancel} className='btn btn-primary w-25'>
                Cancel
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  console.log('here state', state.employee);
  return {
    numberOfEmployees: state.employee.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmployees: (formData) => dispatch(updateEmployees(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);
