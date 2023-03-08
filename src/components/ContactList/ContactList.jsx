import { useSelector } from 'react-redux';
import { visibleContacts } from 'redux/selectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactListIsEmpty } from 'components/ContactListIsEmpty/ContactListIsEmpty';

import styles from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(visibleContacts);

  return (
    <div className={styles.contactListContainer}>
      <ul
        className={`${styles.contactList} ${
          contacts.length > 1 ? styles.scrollbar : ''
        }`}
      >
        {contacts.length === 0 ? (
          <ContactListIsEmpty />
        ) : (
          contacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))
        )}
      </ul>
    </div>
  );
};
export default ContactList;
