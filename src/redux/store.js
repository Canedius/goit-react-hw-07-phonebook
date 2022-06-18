import { contactsApi } from './contacts/contact-slice';
import { configureStore, } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]:contactsApi.reducer
  },
  middleware: getDefaultMiddleware=>[
    ...getDefaultMiddleware(),
    contactsApi.middleware
  ],
  })

export default store;
