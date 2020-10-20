import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contact/addContact', (name, number) => ({
  payload: {
    contact: {
      name,
      number,
      id: uuidv4(),
    },
  },
}));

// const addContact = (name, number) => {
//   return {
//     type: 'contact/addContact',
//     payload: {
//       contact: {
//         name: name,
//         number: number,
//         id: uuidv4(),
//       },
//     },
//   };
// };

const deleteContact = createAction('contact/deleteContact');

// const deleteContact = id => {
//   return {
//     type: 'contact/deleteContact',
//     payload: {
//       id,
//     },
//   };
// };

const onChangeFilter = createAction('filter/onChange');

// const onChangeFilter = filter => {
//   return {
//     type: 'filter/onChange',
//     payload: {
//       filter,
//     },
//   };
// };
export default { addContact, deleteContact, onChangeFilter };
