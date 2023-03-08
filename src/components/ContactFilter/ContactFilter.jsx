import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';

import styles from './ContactFilter.module.scss';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <label className={styles.filterTitle}>
      Find contacts by name
      <input
        className={styles.filterInput}
        onChange={changeFilter}
        type="text"
        name="filter"
      ></input>
    </label>
  );
};
export default ContactFilter;
