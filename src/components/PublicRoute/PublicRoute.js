// import { useAuth } from 'shared/hooks/useAuth';
// import { Navigate } from 'react-router-dom';

// const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

// export default PublicRoute;

import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from 'redux/auth/selectors';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (isLogin) {
    return <Navigate to="/phonebook" />;
  }

  return <Outlet />;
};

export default PublicRoute;
