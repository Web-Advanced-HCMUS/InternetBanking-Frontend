import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from 'containers/LoginForm';
import AuthLayout from 'layouts/AuthLayout';
import { ThemeProvider } from '@mui/material';
import { theme } from './constants/theme';
import Homepage from 'pages/HomePage';
import HomeLayout from 'layouts/HomeLayout';
import DebtPage from 'pages/DebtPage';
import CustomerHome from 'pages/CustomerHome';
import TransactionPage from 'pages/TransactionPage';
import TransferPage from 'pages/TransferPage';
import CardManagement from 'pages/CardManagement';
import ProfilePage from 'pages/ProfilePage';

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
            <Route path="/home" element={<CustomerHome />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/card-management" element={<CardManagement />} />
            <Route path="/transfer/internal" element={<TransferPage />} />
            <Route path="/transfer/external" element={<TransferPage isExt />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="debt" element={<DebtPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
