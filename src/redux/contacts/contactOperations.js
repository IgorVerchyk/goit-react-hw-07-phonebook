import contactActions from './contactActions';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3456';

const addContact = (name, number) => dispatch => {
  dispatch(contactActions.addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(contactActions.addContactSuccess(data)))
    .catch(error => dispatch(contactActions.addContactFeilure(error)));
};

const fetchContact = () => dispatch => {
  dispatch(contactActions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(contactActions.fetchContactSuccess(data)))
    .catch(error => dispatch(contactActions.fetchContactFeilure(error)));
};

const deleteContact = id => dispatch => {
  dispatch(contactActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactActions.deleteContactSuccess(id)))
    .catch(error => dispatch(contactActions.deleteContactFeilure(error)));
};

export default { addContact, fetchContact, deleteContact };
