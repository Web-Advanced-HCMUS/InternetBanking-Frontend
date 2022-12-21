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
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
