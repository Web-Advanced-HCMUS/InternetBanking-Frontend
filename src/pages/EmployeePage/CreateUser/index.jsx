import CustomerTopBar from 'layouts/HomeLayout/Topbar/CustomerTopBar';
import { default as CreateUserContainer } from 'containers/employee/CreateUser';
import { useProSidebar } from 'react-pro-sidebar';

const CreateUser = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ height: '100%' }}>
      <div>
        <CustomerTopBar collapseSidebar={collapseSidebar} />
      </div>
      <CreateUserContainer />
    </div>
  );
};

export default CreateUser;
