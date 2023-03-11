import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';
import authSlice from './auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
