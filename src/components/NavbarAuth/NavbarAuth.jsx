import { NavLink } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import styles from './NavbarAuth.module.scss';

const NavbarAuth = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/login" className={styles.link}>
        <div className={styles.wrapper}>
          <LoginIcon sx={{ fontSize: 26, marginRight: 0.75 }}></LoginIcon>Login
        </div>
      </NavLink>
      <NavLink to="/register" className={styles.link}>
        <div className={styles.wrapper}>
          <LogoutIcon sx={{ fontSize: 26, marginRight: 0.75 }}></LogoutIcon>
          Register
        </div>
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
