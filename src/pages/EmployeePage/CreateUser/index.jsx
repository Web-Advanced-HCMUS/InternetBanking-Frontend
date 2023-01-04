import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import Createuser from 'containers/employee/CreateUser'
import { useProSidebar } from 'react-pro-sidebar';


const CreateUser = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ height: '100%' }}>
      <div>
      <CustomerTopBar collapseSidebar={collapseSidebar} />
      </div>
      <Createuser/>
    </div>
  );
};

export default CreateUser;
