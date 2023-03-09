import NavbarAuth from 'components/NavbarAuth/NavbarAuth';

import styles from './styles.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBcg}>
        <div className={styles.contactBook}>
          <h1 className={styles.title}>Phonebook</h1>
          <div className={styles.mainContainer}>
            <h2 className={styles.subTitle}>Welcome to the Phonebook</h2>
            <p className={styles.subTitle}>
              Dear User, in order to use the application, you need to Register
              or LogIn if you already have an account.
            </p>
            <NavbarAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
