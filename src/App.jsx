import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import LoginForm from 'containers/LoginForm';
import AuthLayout from 'layouts/AuthLayout';
import Homepage from 'pages/HomePage';
import HomeLayout from 'layouts/HomeLayout';
import ForgotPasswordForm from 'containers/ForgotPasswordForm';

// customer
import CustomerHome from 'pages/CustomerHome';
import TransferPage from 'pages/TransferPage';
import CardManagement from 'pages/CardManagement';
import ProfilePage from 'pages/ProfilePage';
import DebtPage from 'pages/DebtPage';
import EmployeeMainPage from 'pages/EmployeePage/EmployeeMainPage';
import CreateUser from 'pages/EmployeePage/CreateUser';
import TopUp from 'pages/EmployeePage/TopUp';
import UserTransaction from 'pages/EmployeePage/UserTransaction';
import CustomerLayout from 'layouts/CustomerLayout';
import { default as CustomerDebtTransactions } from 'pages/transactions/DebtTransactions';
import { default as CustomerReceiveTransactions } from 'pages/transactions/ReceiveTransactions';
import { default as CustomerTransferTransactions } from 'pages/transactions/TransferTransactions';

//  admin
import { useMode, ColorModeContext } from './theme';
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
import DashBoard from 'admin/pages/dashboard';

// employees
import EmployeeLayout from 'employee/layout';
import Profile from 'employee/pages/profile';
import ChangePassword from 'employee/pages/password/change';
import AddCustomer from 'employee/pages/customers/AddCustomers';
import CustomerDeposit from 'employee/pages/customers/CustomerDeposit';
import CustomerTransactions from 'employee/pages/customers/CustomerTransactions';
import ReceiveTransactions from 'employee/pages/transactions/ReceiveTransactions';
import TransferTransactions from 'employee/pages/transactions/TransferTransactions';
import DebtTransactions from 'employee/pages/transactions/DebtTransactions';
import { default as EmployeeDashboard } from 'employee/pages/dashboard';
import TransferConfirmation from 'pages/TransferConfirmation.jsx';
import ReceiverManagement from 'pages/ReceiverManagement';
import Transactions from 'pages/transactions';

import ProtectedRoute from 'components/ProtectedRoute';
import config from 'config/config';
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
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

              <Route path="/">
                <Route
                  index
                  element={
                    <HomeLayout>
                      <Homepage />
                    </HomeLayout>
                  }
                />
                <Route element={<ProtectedRoute userRole={config.USER_ROLE.CLIENT} redirectTo="/login" />}>
                  <Route
                    path="/profile"
                    element={
                      <EmployeeLayout>
                        <Profile />
                      </EmployeeLayout>
                    }
                  />
                  <Route
                    path="/change-password"
                    element={
                      <EmployeeLayout>
                        <ChangePassword />
                      </EmployeeLayout>
                    }
                  />
                  {/* common */}

                  {/* customer */}
                  <Route
                    path="/home"
                    element={
                      <CustomerLayout>
                        <CustomerHome />
                      </CustomerLayout>
                    }
                  />
                  <Route
                    path="/credits"
                    element={
                      <CustomerLayout>
                        <CardManagement />
                      </CustomerLayout>
                    }
                  />
                  <Route
                    path="/transfer/internal"
                    element={
                      <CustomerLayout>
                        <TransferPage />
                      </CustomerLayout>
                    }
                  />
                  <Route
                    path="/transfer/external"
                    element={
                      <CustomerLayout>
                        <TransferPage isExt />
                      </CustomerLayout>
                    }
                  />
                  <Route
                    path="/transfer/confirm"
                    element={
                      <CustomerLayout>
                        <TransferConfirmation />
                      </CustomerLayout>
                    }
                  />
                  <Route
                    path="/receiver"
                    element={
                      <CustomerLayout>
                        <ReceiverManagement />
                      </CustomerLayout>
                    }
                  />
                  <Route
                    path="/debt"
                    element={
                      <CustomerLayout>
                        <DebtPage />
                      </CustomerLayout>
                    }
                  />
                  <Route
                    path="/transactions"
                    element={
                      <CustomerLayout>
                        <Transactions />
                      </CustomerLayout>
                    }
                  />

                  <Route
                    path="/transactions/:idx"
                    element={
                      <CustomerLayout>
                        <Transactions />
                      </CustomerLayout>
                    }
                  />
                  {/* customer */}
                </Route>
                <Route element={<ProtectedRoute userRole={config.USER_ROLE.EMPLOYEE} redirectTo="/login" />}>
                  {/* employee */}
                  <Route
                    path="/employee"
                    element={
                      <EmployeeLayout>
                        <EmployeeDashboard />
                      </EmployeeLayout>
                    }
                  />
                  <Route
                    path="/employee/customers/add"
                    element={
                      <EmployeeLayout>
                        <AddCustomer />
                      </EmployeeLayout>
                    }
                  />
                  <Route
                    path="/employee/customers/deposit"
                    element={
                      <EmployeeLayout>
                        <CustomerDeposit />
                      </EmployeeLayout>
                    }
                  />
                  <Route
                    path="/employee/customers/transactions"
                    element={
                      <EmployeeLayout>
                        <CustomerTransactions />
                      </EmployeeLayout>
                    }
                  />
                  <Route
                    path="/employee/transactions/receive"
                    element={
                      <EmployeeLayout>
                        <ReceiveTransactions />
                      </EmployeeLayout>
                    }
                  />
                  <Route
                    path="/employee/transactions/transfer"
                    element={
                      <EmployeeLayout>
                        <TransferTransactions />
                      </EmployeeLayout>
                    }
                  />
                  <Route
                    path="/employee/transactions/debt"
                    element={
                      <EmployeeLayout>
                        <DebtTransactions />
                      </EmployeeLayout>
                    }
                  />
                  {/* employee */}
                </Route>
                <Route element={<ProtectedRoute userRole={config.USER_ROLE.ADMIN} redirectTo="/login" />}>
                  {/* admin */}
                  <Route
                    path="/admin"
                    element={
                      <AdminLayout>
                        <DashBoard />
                      </AdminLayout>
                    }
                  />
                  <Route
                    path="/admin/employees"
                    element={
                      <AdminLayout>
                        <Employees />
                      </AdminLayout>
                    }
                  />
                  <Route
                    path="/admin/employees/add"
                    element={
                      <AdminLayout>
                        <AddEmployees />
                      </AdminLayout>
                    }
                  />
                  <Route
                    path="/admin/banks"
                    element={
                      <AdminLayout>
                        <BankDetails />
                      </AdminLayout>
                    }
                  />
                  <Route
                    path="/admin/banks/add"
                    element={
                      <AdminLayout>
                        <AddBank />
                      </AdminLayout>
                    }
                  />
                  <Route
                    path="/admin/invoices"
                    element={
                      <AdminLayout>
                        <Invoices />
                      </AdminLayout>
                    }
                  />
                  <Route
                    path="/admin/faq"
                    element={
                      <AdminLayout>
                        <FAQ />
                      </AdminLayout>
                    }
                  />
                  <Route
                    path="/admin/analyst/bar"
                    element={
                      <AdminLayout>
                        <BarAnalyst />
                      </AdminLayout>
                    }
                  />
                  <Route
                    path="/admin/analyst/line"
                    element={
                      <AdminLayout>
                        <LineAnalyst />
                      </AdminLayout>
                    }
                  />
                  <Route
                    path="/admin/analyst/pie"
                    element={
                      <AdminLayout>
                        <PieAnalyst />
                      </AdminLayout>
                    }
                  />
                  {/* admin */}
                </Route>
              </Route>
            </Routes>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
