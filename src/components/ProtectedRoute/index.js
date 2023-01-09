import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ userRole, redirectTo }) {
  const { role } = useSelector((state) => state.auth.loggedInUser);
  const { refreshToken } = useSelector((state) => state.auth);
  return userRole?.includes(role) && refreshToken ? <Outlet /> : <Navigate to={redirectTo} replace={true} />;
}

export default ProtectedRoute;
