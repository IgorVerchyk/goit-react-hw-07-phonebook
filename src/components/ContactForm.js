import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactOperations from '../redux/contacts/contactOperations';
import contactSelectors from '../redux/contacts/contactSelectors';

import styles from './Contacts.module.css';

class ContactForm extends Component {
  state = { name: '', number: '' };

  changeHandler = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const items = this.props.contacts.map(contact =>
      contact.name.toLowerCase(),
    );
    const contactIsAvailable = items.includes(name.toLowerCase().trim());
    if (contactIsAvailable) {
      alert(`${name} is already in contacts`);
    } else {
      this.props.onAddContact(name, number);
      this.reset();
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.submitHandler} className={styles.contactForm}>
        <label className={styles.container}>
          <span className={styles.inputTitle}>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Please, enter the name..."
            onChange={this.changeHandler}
            className={styles.inputs}
          />
          <span className={styles.inputTitle}>Number</span>
          <input
            type="number"
            name="number"
            value={number}
            placeholder="Please, enter the number..."
            onChange={this.changeHandler}
            className={styles.inputs}
          />
        </label>
        <button
          type="submit"
          disabled={!name.length || !number.length}
          className={styles.contactAddButton}
        >
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onAddContact: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: contactSelectors.getContacts(state),
});

const mapDispatchToProps = { onAddContact: contactOperations.addContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
