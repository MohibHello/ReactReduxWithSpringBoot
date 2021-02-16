import React, { useState } from 'react';
import { connect } from 'react-redux';
import './css/login.css';
import { createEmployees } from '../redux';
import { Link } from 'react-router-dom';

const RegisterForm = (props) => {
  let empObject = {
    firstName: '',
    lastName: '',
    designation: '',
    email: '',
    password: '',
    exitDate: '',
    address: '',
    active: true,
  };

  const [formData, setFormData] = useState(empObject);

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    console.log('submitted', props);
    props.createEmployees(formData);
    setFormData(empObject);
    props.history.push('/');
  };

  const onChange = (e) => {
    console.log('asd', formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='row'>
      <div className='container-fluid'>
        <div className='login-form'>
          <div className='main-div'>
            <div className='panel'>
              <h2>Employee Registration</h2>
              <p>Please enter the details</p>
            </div>
            <form id='Login' className='form-container' onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='inputFirstName'
                  name='firstName'
                  placeholder='First Name'
                  onChange={onChange}
                  required
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
                  required
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
                  required
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
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  name='email'
                  placeholder='Email'
                  onChange={onChange}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='inputPassword'
                  name='password'
                  placeholder='Password'
                  onChange={onChange}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  id='inputPassword'
                  placeholder='Confirm Password'
                  required
                />
              </div>

              <button type='submit' className='btn btn-primary w-50'>
                Register
              </button>
              <div className='mt-2 forgot'>
                <div>
                  <Link
                    to='/'
                    className='w-100 d-flex justify-content-center'
                  >
                    Back to Login?
                  </Link>
                </div>
              </div>
            </form>
          </div>
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
    createEmployees: (formData) => dispatch(createEmployees(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
