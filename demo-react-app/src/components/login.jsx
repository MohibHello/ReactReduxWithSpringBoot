import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginEmployee } from '../redux';
import './css/login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
  const [loginData, setLoginData] = useState({ login: '', password: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    props.loginEmployee(loginData,props);
  };

  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <ToastContainer />
      <div className='login-form'>
        <div className='main-div'>
          <div className='panel'>
            <h2>Employee Login</h2>
            <small style={{color:'red'}}>{props.error}</small>
            <p>Please enter your email and password</p>
          </div>
          <form id='Login' onSubmit={onSubmit}>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                id='inputEmail'
                placeholder='Email Address'
                name='email'
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                id='inputPassword'
                placeholder='Password'
                name='password'
                onChange={onChange}
                required
              />
            </div>
            <div className='mb-5 forgot'>
              <div>
                <Link to='/register' className='float-left'>
                  Register
                </Link>
              </div>
              <div>
                <Link to='/forgot' className='float-right'>
                  Forgot password?
                </Link>
              </div>
            </div>
            <button type='submit' className='btn btn-primary'>
              Login
            </button>
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
    error: state.employee.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginEmployee: (loginData,props) => dispatch(loginEmployee(loginData,props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
