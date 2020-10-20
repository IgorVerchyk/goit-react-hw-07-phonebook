import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

import styles from './Contacts.module.css';
import fade from './fade.module.css';
import contactActions from '../redux/contacts/contactActions';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(({ id, ...contact }) => (
        <CSSTransition key={id} timeout={250} classNames={fade}>
          <ContactItem id={id} {...contact} onDelete={() => onDelete(id)} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.array,
  ]),
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.phonebook.contacts.filter(item =>
    item.name.toLowerCase().includes(state.phonebook.filter),
  ),
});

const mapDispatchToProps = {
  onDelete: contactActions.deleteContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
