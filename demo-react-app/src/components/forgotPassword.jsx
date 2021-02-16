import React, {useState} from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {forgotPasswordEmployee} from '../redux'

const ForgotPassword = (props) => {


    const [forgot, setForgot] = useState('')

    const onChange = (e) => {
        setForgot(e.target.value);
      };

      const onSubmit = (e) => {
        e.preventDefault();
        props.forgotPassword(forgot,props);
      };

    return (
        <div className='container'>
        <div className='login-form'>
          <div className='main-div'>
            <div className='panel'>
              <h2>Password Recovery</h2>
              <small style={{color:'red'}}>{props.error}</small>
              <p>Please enter your email</p>
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
              <div className='mb-5 forgot'>
                <div>
                  <Link to='/register' className='float-left'>
                    Register
                  </Link>
                </div>
                <div>
                  <Link to='/' className='float-right'>
                    Login
                  </Link>
                </div>
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
         {'password :' + props.message}
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
    console.log('here state', state.employee);
    return {
      numberOfEmployees: state.employee.employees,
      error: state.employee.error,
      message:state.employee.message
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      forgotPassword: (formData,props) => dispatch(forgotPasswordEmployee(formData,props)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
