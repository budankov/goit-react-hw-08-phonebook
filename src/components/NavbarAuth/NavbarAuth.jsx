import { NavLink } from 'react-router-dom';

//MUI
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import styles from './NavbarAuth.module.scss';

const NavbarAuth = () => {
  return (
    <div className={styles.container}>
      <Button
        type="button"
        variant="contained"
        sx={{
          fontSize: 20,
          backgroundColor: '#4caf50',
          '&:hover': { backgroundColor: '#29972c' },
        }}
        startIcon={<LoginIcon />}
      >
        <NavLink className={styles.authScreen} to="/login">
          Login
        </NavLink>
      </Button>
      <Button
        type="button"
        variant="contained"
        sx={{
          fontSize: 20,
          backgroundColor: '#4caf50',
          '&:hover': { backgroundColor: '#29972c' },
        }}
        startIcon={<LogoutIcon />}
      >
        <NavLink className={styles.authScreen} to="/register">
          Register
        </NavLink>
      </Button>
    </div>
  );
};

export default NavbarAuth;
