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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
