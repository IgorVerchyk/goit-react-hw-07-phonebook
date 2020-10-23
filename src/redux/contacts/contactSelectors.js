import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebook.contacts;
const getFilter = state => state.phonebook.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getContactsById = createSelector(
  [(_, contactId) => contactId, getContacts],
  (contactId, items) => {
    return items.find(item => item.id === contactId);
  },
);

export default { getVisibleContacts, getContactsById, getFilter, getContacts };
