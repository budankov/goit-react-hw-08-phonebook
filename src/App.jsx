// import { Route, Routes } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

// const HomePage = lazy(() => import('./pages/HomePage'));
// const LoginPage = lazy(() => import('./pages/LoginPage'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage'));
// const Phonebook = lazy(() => import('./components/Phonebook/Phonebook'));

// const App = () => {
//   return (
//     <Suspense fallback={<p>...Load page</p>}>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/phonebook" element={<Phonebook />} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default App;

import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
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
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/phonebook" element={<Phonebook />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
    // <Routes>
    //   <Route path="/" element={<HomePage />}>
    //     <Route
    //       index
    //       element={
    //         <PublicRoute redirectTo="/contacts" component={<HomePage />} />
    //       }
    //     />
    //     <Route
    //       path="/register"
    //       element={
    //         <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
    //       }
    //     />
    //     <Route
    //       path="/login"
    //       element={
    //         <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
    //       }
    //     />
    //     <Route
    //       path="/phonebook"
    //       element={
    //         <PrivateRoute redirectTo="/login" component={<Phonebook />} />
    //       }
    //     />
    //   </Route>
    // </Routes>
  );
};

export default App;
