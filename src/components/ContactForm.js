import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactActions from '../redux/contacts/contactActions';

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

    this.props.onAddContact(name, number);
    this.reset();
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

const mapDispatchToProps = { onAddContact: contactActions.addContact };

export default connect(null, mapDispatchToProps)(ContactForm);
