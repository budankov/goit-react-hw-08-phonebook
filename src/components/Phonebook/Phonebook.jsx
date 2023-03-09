import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

import NavbarAuth from 'components/NavbarAuth/NavbarAuth';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import Loader from 'components/Loader/Loader';

import styles from './Phonebook.module.scss';

const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.containerBcg}>
        <div className={styles.contactBook}>
          <h1 className={styles.title}>Phonebook</h1>
          <NavbarAuth />
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
