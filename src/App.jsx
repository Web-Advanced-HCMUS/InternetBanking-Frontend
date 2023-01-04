import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginForm from 'containers/LoginForm';
import { useDispatch } from 'react-redux';
import AuthLayout from 'layouts/AuthLayout';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Homepage from 'pages/HomePage';
import HomeLayout from 'layouts/HomeLayout';
import DebtPage from 'pages/DebtPage';
import CustomerHome from 'pages/CustomerHome';
import { useMode, ColorModeContext } from 'admin/theme';
import Employees from 'admin/pages/employees';
import { ProSidebarProvider } from 'react-pro-sidebar';
import AddEmployees from 'admin/pages/employees/add';
import BankDetails from 'admin/pages/banks';
import AddBank from 'admin/pages/banks/add';
import Invoices from 'admin/pages/invoices';
import FAQ from 'admin/pages/faq';
import BarAnalyst from 'admin/pages/chart/bar';
import AdminLayout from 'admin/layout';
import LineAnalyst from 'admin/pages/chart/line';
import PieAnalyst from 'admin/pages/chart/pie';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="App">
            <Routes>
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
                <Route
                  path="login"
                  element={
                    <AuthLayout>
                      <LoginForm />
                    </AuthLayout>
                  }
                />
                <Route path="debt" element={<DebtPage />} />
                <Route path="/admin" element={<AdminLayout />} />
                <Route path="/admin/employees" element={<Employees />} />
                <Route path="/admin/employees/add" element={<AddEmployees />} />
                <Route path="/admin/banks" element={<BankDetails />} />
                <Route path="/admin/banks/add" element={<AddBank />} />
                <Route path="/admin/invoices" element={<Invoices />} />
                <Route path="/admin/faq" element={<FAQ />} />
                <Route path="/admin/analyst/bar" element={<BarAnalyst />} />
                <Route path="/admin/analyst/line" element={<LineAnalyst />} />
                <Route path="/admin/analyst/pie" element={<PieAnalyst />} />
              </Route>
            </Routes>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
