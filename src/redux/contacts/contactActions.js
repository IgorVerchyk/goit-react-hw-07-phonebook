import { createAction } from '@reduxjs/toolkit';

const onChangeFilter = createAction('filter/onChange');

const addContactRequest = createAction('contacts/requestSend');
const addContactSuccess = createAction('contacts/requestSuccess');
const addContactFeilure = createAction('contacts/requestFeilure');

const fetchContactRequest = createAction('contacts/fetchRequest');
const fetchContactSuccess = createAction('contacts/fetchSuccess');
const fetchContactFeilure = createAction('contacts/fetchFeilure');

const deleteContactRequest = createAction('contacts/removeRequest');
const deleteContactSuccess = createAction('contacts/removeSuccess');
const deleteContactFeilure = createAction('contacts/removeFeilure');

export default {
  onChangeFilter,
  addContactRequest,
  addContactSuccess,
  addContactFeilure,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactFeilure,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactFeilure,
};
