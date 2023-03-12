import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Layout from 'components/Layout/Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'shared/hooks/useAuth';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const Phonebook = lazy(() => import('./components/Phonebook/Phonebook'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute redirectTo="/phonebook" component={<HomePage />} />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/phonebook" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/phonebook" component={<LoginPage />} />
          }
        />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
