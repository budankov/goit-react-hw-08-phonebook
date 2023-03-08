import styles from './ContactListIsEmpty.module.scss';

export const ContactListIsEmpty = () => {
  return (
    <p className={styles.listIsEmpty}>
      Contacts list is empty! Add contacts and it they appear here.
    </p>
  );
};
