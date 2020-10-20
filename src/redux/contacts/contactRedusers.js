import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contactActions';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const addContact = (state, action) => {
  const item = action.payload.contact.name;
  const items = state.map(contact => contact.name.toLowerCase());
  if (items.includes(item.toLowerCase().trim())) {
    alert(`${item} is already in contacts`);
  } else {
    return [...state, action.payload.contact];
  }
};

const deleteContact = (state, action) =>
  state.filter(({ id }) => id !== action.payload);

const onChangeFilter = (state, action) => action.payload;

const contacts = createReducer(defaultContacts, {
  [contactActions.addContact]: addContact,
  [contactActions.deleteContact]: deleteContact,
});

// const contacts = (state = defaultContacts, actions) => {
//   switch (actions.type) {
//     case 'contact/addContact':
//       return addContact(state, actions);
//     case 'contact/deleteContact':
//       return state.filter(({ id }) => id !== actions.payload);
//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [contactActions.onChangeFilter]: onChangeFilter,
});

// const filter = (state = '', actions) => {
//   switch (actions.type) {
//     case 'filter/onChange':
//       return actions.payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  contacts,
  filter,
});
