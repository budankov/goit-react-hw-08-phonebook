import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registration } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from './Yup';

//MUI
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = data => {
    dispatch(registration(data));
    reset();
  };

  return (
    <div>
      <h2>Login form</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Email</p>
          <input {...register('email')} />
          {errors.email && (
            <p className={styles.errorsMassage}>{errors.email.message}</p>
          )}
        </label>
        <label>
          <p>Password</p>
          <input {...register('password')} />
          {errors.password && (
            <p className={styles.errorsMassage}>{errors.password.message}</p>
          )}
        </label>
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            backgroundColor: '#4caf50',
            '&:hover': { backgroundColor: '#29972c' },
          }}
          startIcon={<LoginIcon />}
        >
          Register
        </Button>
        <p className={styles.authScreenNavigation}>
          Not a member? <NavLink to="/register"> Register</NavLink>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
