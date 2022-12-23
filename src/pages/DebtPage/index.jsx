import CustomerSideBar from 'layouts/HomeLayout/Sidebar/CustomerSideBar';
import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import DebtPage from 'containers/DebtReminder'
import { useProSidebar } from 'react-pro-sidebar';


const CustomerHome = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ height: '100%' }}>
      <div>
      <CustomerTopBar collapseSidebar={collapseSidebar} />
      <CustomerSideBar />
      </div>
      <DebtPage/>
    </div>
  );
};

export default CustomerHome;
