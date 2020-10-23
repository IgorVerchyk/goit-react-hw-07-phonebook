import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contactActions';

const addContact = (state, action) => {
  return [...state, action.payload];
};

const deleteContact = (state, action) =>
  state.filter(({ id }) => id !== action.payload);

const onPushToState = (_, action) => action.payload;

const contacts = createReducer([], {
  [contactActions.fetchContactSuccess]: onPushToState,
  [contactActions.addContactSuccess]: addContact,
  [contactActions.deleteContactSuccess]: deleteContact,
});

const filter = createReducer('', {
  [contactActions.onChangeFilter]: onPushToState,
});

export default combineReducers({
  contacts,
  filter,
});
