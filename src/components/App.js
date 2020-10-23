import React, { Component } from 'react';

import Layout from './Layout';
import ContactList from './ContactsList';
import ContactForm from './ContactForm';
import Filter from './ContactFilter';
import contactOperations from '../redux/contacts/contactOperations';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <Layout title={'Phonebook'}>
          <ContactForm />
        </Layout>
        <Layout title={'Contacts'}>
          <Filter />
          <ContactList />
        </Layout>
      </>
    );
  }
}

const mapDispatchToProps = { onFetchContacts: contactOperations.fetchContact };

export default connect(null, mapDispatchToProps)(App);
