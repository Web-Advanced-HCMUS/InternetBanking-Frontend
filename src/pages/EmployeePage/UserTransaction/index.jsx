import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import Transaction from 'containers/employee/UserTransaction'
import { useProSidebar } from 'react-pro-sidebar';


const UserTransaction = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ height: '100%' }}>
      <div>
      <CustomerTopBar collapseSidebar={collapseSidebar} />
      </div>
      <Transaction/>
    </div>
  );
};

export default UserTransaction;
