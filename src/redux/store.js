import { configureStore } from '@reduxjs/toolkit';

import contactReduser from './contacts/contactRedusers';

const store = configureStore({
  reducer: { phonebook: contactReduser },
});

export default store;
