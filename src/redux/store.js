import contactReducer from './contacts/contact-reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});
export default store;
