import { Provider } from 'react-redux';
import store from './redux/store';
import EmployeeContainer from './components/employeeContainer';
import RegisterForm from './components/registerForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import ForgotPassword from './components/forgotPassword';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register' component={RegisterForm}/>
            <Route path='/dashboard' component={EmployeeContainer}/>
            <Route path='/forgot' component={ForgotPassword}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
