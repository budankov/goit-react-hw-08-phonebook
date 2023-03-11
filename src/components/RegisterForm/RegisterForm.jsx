import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registration } from 'redux/auth/operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from './Yup';

//MUI
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import styles from './RegisterForm.module.scss';

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
      <h2>Registration form</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Username</p>
          <input {...register('name')} />
          {errors.name && (
            <p className={styles.errorsMassage}>{errors.name.message}</p>
          )}
        </label>
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
          startIcon={<AppRegistrationIcon />}
        >
          Register
        </Button>
        <p className={styles.authScreenNavigation}>
          Have an account? <NavLink to="/login"> LogIn</NavLink>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
