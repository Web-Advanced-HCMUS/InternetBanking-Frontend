import CustomerSideBar from 'containers/global/Sidebar/CustomerSideBar';
import CustomerTopBar from 'containers/global/Topbar/CustomerTopBar';
import { useProSidebar } from 'react-pro-sidebar';

const CustomerHome = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ height: '100%' }}>
      <CustomerTopBar collapseSidebar={collapseSidebar} />
      <CustomerSideBar />
    </div>
  );
};

export default CustomerHome;
