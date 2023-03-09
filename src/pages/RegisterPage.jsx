import RegisterForm from 'components/RegisterForm/RegisterForm';

import styles from './styles.module.scss';

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBcg}>
        <div className={styles.contactBook}>
          <h1 className={styles.title}>Phonebook</h1>
          <div className={styles.mainContainer}>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
