import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import Topup from 'containers/employee/TopUp'
import { useProSidebar } from 'react-pro-sidebar';


const TopUp = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ height: '100%' }}>
      <div>
      <CustomerTopBar collapseSidebar={collapseSidebar} />
      </div>
      <Topup/>
    </div>
  );
};

export default TopUp;
