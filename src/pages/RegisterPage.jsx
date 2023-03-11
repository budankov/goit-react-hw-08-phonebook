import { NavLink } from 'react-router-dom';

//MUI
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

import RegisterForm from 'components/RegisterForm/RegisterForm';

import styles from './styles.module.scss';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBcg}>
        <div className={styles.contactBook}>
          <h1 className={styles.title}>Phonebook</h1>
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              backgroundColor: '#4caf50',
              '&:hover': { backgroundColor: '#29972c' },
            }}
            startIcon={<HomeIcon />}
          >
            <NavLink className={styles.home} to="/">
              Home
            </NavLink>
          </Button>
          <div className={styles.mainContainer}>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
