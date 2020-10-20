import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contacts.module.css';

export default function ContactItem({ name, number, onDelete }) {
  return (
    <li className={styles.listItem}>
      <p className={styles.contact}>
        {name}:{number}
      </p>
      <button type="button" onClick={onDelete} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
