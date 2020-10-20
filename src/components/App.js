import React from 'react';

import Layout from './Layout';
import ContactList from './ContactsList';
import ContactForm from './ContactForm';
import Filter from './ContactFilter';

export default function App() {
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
