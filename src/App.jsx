import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginForm from 'containers/LoginForm';
import AuthLayout from 'layouts/AuthLayout';
import Homepage from 'pages/HomePage';
import HomeLayout from 'layouts/HomeLayout';
import DebtPage from 'pages/DebtPage';
import CustomerHome from 'pages/CustomerHome';
import ForgotPasswordForm from 'containers/ForgotPasswordForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <AuthLayout>
              <LoginForm />
            </AuthLayout>
          }
        />
        <Route
          exact
          path="/forgot-pass"
          element={
            <AuthLayout>
              <ForgotPasswordForm />
            </AuthLayout>
          }
        />
        <Route path="/home" element={<CustomerHome />} />
        <Route path="/">
          <Route
            index
            element={
              <HomeLayout>
                <Homepage />
              </HomeLayout>
            }
          />

          <Route path="debt" element={<DebtPage />} />
          <Route path="home" element={<CustomerHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
