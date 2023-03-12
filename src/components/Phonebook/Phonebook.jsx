import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { logOut } from 'redux/auth/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { useAuth } from 'shared/hooks/useAuth';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import Loader from 'components/Loader/Loader';

//MUI
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import styles from './Phonebook.module.scss';

const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.containerBcg}>
        <div className={styles.contactBook}>
          <h1 className={styles.title}>Phonebook</h1>
          <div className={styles.user}>
            <p className={styles.user}>
              <PersonOutlineIcon />
              {user.name}
            </p>
            <IconButton aria-label="delete" onClick={() => dispatch(logOut())}>
              <LogoutIcon sx={{ fill: '#dd2c00' }} />
            </IconButton>
          </div>
          <ContactForm />
          <h2 className={styles.subTitle}>Contacts</h2>
          <ContactFilter />
          {isLoading && !error && <Loader />}
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Phonebook;
