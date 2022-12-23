import CustomerSideBar from 'layouts/HomeLayout/Sidebar/CustomerSideBar';
import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import UserAccount from 'containers/UserAccount'
import { useProSidebar } from 'react-pro-sidebar';


const CustomerHome = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ height: '100%' }}>
      <div>
      <CustomerTopBar collapseSidebar={collapseSidebar} />
      <CustomerSideBar />
      </div>
      <UserAccount/>
    </div>
  );
};

export default CustomerHome;
