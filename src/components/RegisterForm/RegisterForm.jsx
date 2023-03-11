import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registration } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from './Yup';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = data => {
    dispatch(registration(data));
    reset();
  };

  return (
    <div>
      <h2>Register Here</h2>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <label>
          <input {...register('name')} />
          <span>Username</span>
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label>
          <input {...register('email')} />
          <span>Email</span>
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label>
          <input {...register('password')} />
          <span>Password</span>
          {errors.password && <p>{errors.password.message}</p>}
        </label>
        <button type="submit">Register</button>
        <span>
          Have an account? <NavLink to="/login">LogIn</NavLink>
        </span>
      </form>
    </div>
  );
};

export default RegisterForm;
