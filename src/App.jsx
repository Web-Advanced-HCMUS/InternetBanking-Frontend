import './App.css';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import LoginForm from 'containers/LoginForm';
import { useDispatch } from 'react-redux';
import AuthLayout from 'layouts/AuthLayout';
import { ThemeProvider } from '@mui/material';
import { theme } from './constants/theme';
import Homepage from 'pages/HomePage';
import HomeLayout from 'layouts/HomeLayout';
import DebtPage from 'pages/DebtPage';
import CustomerHome from 'pages/CustomerHome';
import EmployeeMainPage from 'pages/EmployeePage/EmployeeMainPage'
import CreateUser from 'pages/EmployeePage/CreateUser'
import TopUp from 'pages/EmployeePage/TopUp'
import UserTransaction from 'pages/EmployeePage/UserTransaction'



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <HomeLayout>
                  <Homepage />
                </HomeLayout>
              }
            />
            <Route
              path="login"
              element={
                <AuthLayout>
                  <LoginForm />
                </AuthLayout>
              }
            />
             <Route
              path="debt"
              element={
                <DebtPage />
              }
            />
            <Route
              path="home"
              element={
                <CustomerHome />
              }
            />
          </Route>
          
          <Route path="/employee">
            <Route
                index
                element={
                  <EmployeeMainPage />
                }
              />
              <Route
                path="create"
                element={
                  <CreateUser />
                }
              />
              <Route
                path="topup"
                element={
                  <TopUp />
                }
              />
              <Route
                path="user-transaction"
                element={
                  <UserTransaction />
                }
              />
          </Route>
          
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
