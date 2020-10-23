import React from 'react';
import PropTypes from 'prop-types';

import contactOperations from '../redux/contacts/contactOperations';
import contactSelectors from '../redux/contacts/contactSelectors';

import styles from './Contacts.module.css';
import { connect } from 'react-redux';

function ContactItem({ name, number, onDelete }) {
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
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  const contact = contactSelectors.getContactsById(state, props.id);
  return { ...contact };
};
const mapDispatchToProps = (dispatch, props) => ({
  onDelete: () => dispatch(contactOperations.deleteContact(props.id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
