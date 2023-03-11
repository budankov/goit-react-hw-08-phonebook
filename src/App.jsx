import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/HomePage'));
const Login = lazy(() => import('./pages/LoginPage'));
const Register = lazy(() => import('./pages/RegisterPage'));
const Phonebook = lazy(() => import('./components/Phonebook/Phonebook'));

const App = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Routes>
    </Suspense>
  );
};

export default App;
