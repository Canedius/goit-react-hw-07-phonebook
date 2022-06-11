import contactReducer from './contacts/contact-reducer';
import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ["filter"]
}



const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig,contactReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});
const persistor = persistStore(store)

export default {store,persistor};
