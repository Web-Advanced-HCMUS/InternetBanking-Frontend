import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import Mainpage from 'containers/employee/MainPage'
import { useProSidebar } from 'react-pro-sidebar';


const MainPage = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ height: '100%' }}>
      <div>
      <CustomerTopBar collapseSidebar={collapseSidebar} />
      </div>
      <Mainpage/>
    </div>
  );
};

export default MainPage;
