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
import EmployeePage from 'containers/employee/MainPage'
import CreateUser from 'containers/employee/CreateUser'
import TopUp from 'containers/employee/TopUp'


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
            <Route
              path="employee"
              element={
                <EmployeePage />
              }
            />
            <Route
              path="employee/create"
              element={
                <CreateUser />
              }
            />
             <Route
              path="employee/topup"
              element={
                <TopUp />
              }
            />
          </Route>
          
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
