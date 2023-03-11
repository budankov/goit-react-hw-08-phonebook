import LoginForm from 'components/LoginForm/LoginForm';

import styles from './styles.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBcg}>
        <div className={styles.contactBook}>
          <h1 className={styles.title}>Phonebook</h1>
          <div className={styles.mainContainer}>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
