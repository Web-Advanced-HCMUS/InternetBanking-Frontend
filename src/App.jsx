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
import DashBoard from 'admin/pages/dashboard';
import { default as EmployeeDashboard } from 'staff/pages/dashboard';
import EmployeeMainPage from 'pages/EmployeePage/EmployeeMainPage'
import CreateUser from 'pages/EmployeePage/CreateUser'
import TopUp from 'pages/EmployeePage/TopUp'
import UserTransaction from 'pages/EmployeePage/UserTransaction'
import EmployeeLayout from 'staff/layout';
import Profile from 'staff/pages/profile';
import ChangePassword from 'staff/pages/password/change';
import AddCustomer from 'staff/pages/customers/AddCustomers';
import CustomerDeposit from 'staff/pages/customers/CustomerDeposit';
import CustomerTransactions from 'staff/pages/customers/CustomerTransactions';
import ReceiveTransactions from 'staff/pages/transactions/ReceiveTransactions';
import TransferTransactions from 'staff/pages/transactions/TransferTransactions';
import DebtTransactions from 'staff/pages/transactions/DebtTransactions';

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

              {/* common */}
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

              {/* staff */}
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
              {/* staff */}

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
            </Routes>
          </div>
        </ProSidebarProvider>
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
    </ColorModeContext.Provider>
  );
}

export default App;
