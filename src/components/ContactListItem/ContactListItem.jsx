import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './ContactListItem.module.scss';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li key={id} className={styles.contactItem}>
      {name}: {number}
      <IconButton
        aria-label="delete"
        onClick={() => dispatch(deleteContact(id))}
      >
        <DeleteIcon sx={{ fill: '#dd2c00' }} />
      </IconButton>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
