import axios from 'axios';
import {
  FETCH_EMPLOYEES_REQUEST,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  DELETE_EMPLOYEES_FAILURE,
  DELETE_EMPLOYEES_REQUEST,
  DELETE_EMPLOYEES_SUCCESS,
  CREATE_EMPLOYEES_FAILURE,
  CREATE_EMPLOYEES_REQUEST,
  CREATE_EMPLOYEES_SUCCESS,
  UPDATE_EMPLOYEES_FAILURE,
  UPDATE_EMPLOYEES_REQUEST,
  UPDATE_EMPLOYEES_SUCCESS,
  LOGIN_EMPLOYEE_FAILURE,
  LOGIN_EMPLOYEE_REQUEST,
  LOGIN_EMPLOYEE_SUCCESS,
  FORGOT_PASSWORD_EMPLOYEE_FAILURE,
  FORGOT_PASSWORD_EMPLOYEE_REQUEST,
  FORGOT_PASSWORD_EMPLOYEE_SUCCESS
} from './employeeTypes';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch(fetchEmployeesRequest());
    axios
      .get('http://localhost:8085/api/employee')
      .then((response) => {
        // response.data is the Employees
        const employees = response.data;
        console.log('backend data', employees);
        dispatch(fetchEmployeesSuccess(employees));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchEmployeesFailure(error.message));
      });
    console.log(dispatch);
  };
};

export const deleteEmployees = (id) => {
  return (dispatch) => {
    dispatch(deleteEmployeesRequest());
    return axios
      .delete(`http://localhost:8085/api/employee/+${id}`)
      .then((response) => {
        // response.data is the Employees
        const employees = response.data;
        console.log('backend data', employees);
        dispatch(deleteEmployeesSuccess(employees));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(deleteEmployeesFailure(error.message));
      });
  };
};

export const createEmployees = (employee) => {
  return (dispatch) => {
    dispatch(createEmployeesRequest());
    axios
      .post('http://localhost:8085/api/employee', employee, config)
      .then((response) => {
        // response.data is the Employees
        const employees = response.data;
        console.log('backend data', employees);
        dispatch(createEmployeesSuccess(employees));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(createEmployeesFailure(error.message));
      });
  };
};

export const updateEmployees = (employee) => {
  debugger;
  return (dispatch) => {
    dispatch(updateEmployeesRequest());
    axios
      .put('http://localhost:8085/api/employee', employee, config)
      .then((response) => {
        debugger;
        // response.data is the Employees
        const employees = response.data;
        console.log('backend data', employees);
        dispatch(updateEmployeesSuccess(employees));
      })
      .catch((error) => {
        debugger;
        // error.message is the error message
        dispatch(updateEmployeesFailure(error.message));
      });
  };
};

export const loginEmployee = (loginData,props) => {
  return (dispatch) => {
    dispatch(fetchEmployeesRequest());
    axios
      .post('http://localhost:8085/api/employee/login', loginData, config)
      .then((response) => {
        fetchEmployees();
        if(response.status === 200){
          props.history.push("/dashboard")
        }
      })
      .catch((error) => {
        debugger;
        // error.message is the error message
        dispatch(loginEmployeesFailure(error.message));
      });
    console.log(dispatch);
  };
};

export const forgotPasswordEmployee = (formData,props) => {
  return (dispatch) => {
    dispatch(forgotPasswordEmployeesRequest());
    axios
      .post('http://localhost:8085/api/employee/login', formData, config)
      .then((response) => {
      })
      .catch((error) => {
        debugger;
        // error.message is the error message
        dispatch(forgotPasswordEmployeesFailure(error.message));
      });
  };
};


//forgot Password
export const forgotPasswordEmployeesRequest = () => {
  return {
    type: FORGOT_PASSWORD_EMPLOYEE_REQUEST,
  };
};

export const forgotPasswordEmployeesSuccess = (employee) => {
  return {
    type: FORGOT_PASSWORD_EMPLOYEE_SUCCESS,
    payload: employee,
  };
};

export const forgotPasswordEmployeesFailure = (error) => {
  return {
    type: FORGOT_PASSWORD_EMPLOYEE_FAILURE, 
    payload: error,
  };
};

//login
export const loginEmployeesRequest = () => {
  return {
    type: LOGIN_EMPLOYEE_REQUEST,
  };
};

export const loginEmployeesSuccess = (employee) => {
  return {
    type: LOGIN_EMPLOYEE_SUCCESS,
    payload: employee,
  };
};

export const loginEmployeesFailure = (error) => {
  return {
    type: LOGIN_EMPLOYEE_FAILURE,
    payload: error,
  };
};

//update Employee
export const updateEmployeesRequest = () => {
  return {
    type: UPDATE_EMPLOYEES_REQUEST,
  };
};

export const updateEmployeesSuccess = (employee) => {
  return {
    type: UPDATE_EMPLOYEES_SUCCESS,
    payload: employee,
  };
};

export const updateEmployeesFailure = (error) => {
  return {
    type: UPDATE_EMPLOYEES_FAILURE,
    payload: error,
  };
};

//create Employee
export const createEmployeesRequest = () => {
  return {
    type: CREATE_EMPLOYEES_REQUEST,
  };
};

export const createEmployeesSuccess = (employee) => {
  return {
    type: CREATE_EMPLOYEES_SUCCESS,
    payload: employee,
  };
};

export const createEmployeesFailure = (error) => {
  return {
    type: CREATE_EMPLOYEES_FAILURE,
    payload: error,
  };
};

//Delete Employee
export const deleteEmployeesRequest = () => {
  return {
    type: DELETE_EMPLOYEES_REQUEST,
  };
};

export const deleteEmployeesSuccess = (employee) => {
  return {
    type: DELETE_EMPLOYEES_SUCCESS,
    payload: employee,
  };
};

export const deleteEmployeesFailure = (error) => {
  return {
    type: DELETE_EMPLOYEES_FAILURE,
    payload: error,
  };
};

//Fetch Employee
export const fetchEmployeesRequest = () => {
  return {
    type: FETCH_EMPLOYEES_REQUEST,
  };
};

export const fetchEmployeesSuccess = (employees) => {
  return {
    type: FETCH_EMPLOYEES_SUCCESS,
    payload: employees,
  };
};

export const fetchEmployeesFailure = (error) => {
  return {
    type: FETCH_EMPLOYEES_FAILURE,
    payload: error,
  };
};
