// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import contactReduser from './contacts/contactRedusers';

const store = configureStore({ reducer: { phonebook: contactReduser } });

// import { devToolsEnhancer } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//   phonebook: contactReduser,
// });

// const store = createStore(rootReducer, devToolsEnhancer());

export default store;
