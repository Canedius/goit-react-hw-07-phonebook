import { contactsApi } from './contacts/contact-slice';
import { configureStore, } from '@reduxjs/toolkit';
import contactReducer from './contacts/contact-reducer';

const store = configureStore({
  reducer: {
     contactReducer,
    [contactsApi.reducerPath]:contactsApi.reducer
  },
  middleware: getDefaultMiddleware=>[
    ...getDefaultMiddleware(),
    contactsApi.middleware
  ],
  })

export default store;
