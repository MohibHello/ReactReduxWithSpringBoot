import { combineReducers } from 'redux'
import employeeReducer from './employee/employeeReducer'

//for multiple reducers add here in kv pair
const rootReducer = combineReducers({
  employee: employeeReducer
})

export default rootReducer