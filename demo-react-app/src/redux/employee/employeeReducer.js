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
  LOGIN_EMPLOYEE_SUCCESS
} from './employeeTypes';

const initialState = {
  loading: false,
  employees: [],
  error: '',
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        loading: false,
        employees: action.payload,
        error: '',
      };
    case FETCH_EMPLOYEES_FAILURE:
      return {
        loading: false,
        employees: [],
        error: action.payload,
      };
    case CREATE_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_EMPLOYEES_SUCCESS:
      debugger
      return {
        ...state,
        loading: false,
        employees:[action.payload,...state.employees],
        error: '',
      };
    case CREATE_EMPLOYEES_FAILURE:
      return {
        ...state,
        loading: false,
        employees: [],
        error: action.payload,
      };
    case DELETE_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_EMPLOYEES_SUCCESS:
      return {
        loading: false,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
        message: action.payload,
      };
    case DELETE_EMPLOYEES_FAILURE:
      return {
        loading: false,
        employees: [],
        error: action.payload,
      };
    case UPDATE_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_EMPLOYEES_SUCCESS:
      debugger
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ),
        message: action.payload,
      };
    case UPDATE_EMPLOYEES_FAILURE:
      return {
        loading: false,
        employees: [],
        error: action.payload,
      };
      case LOGIN_EMPLOYEE_REQUEST:
        return {
          ...state,
          loading: true,
        };
        case LOGIN_EMPLOYEE_SUCCESS:
          return {
            loading: false,
            employees: action.payload,
            error: '',
          };
        case LOGIN_EMPLOYEE_FAILURE:
          debugger
          return {
            loading: false,
            employees: [],
            error: action.payload,
          };

    default:
      return state;
  }
};

export default reducer;
