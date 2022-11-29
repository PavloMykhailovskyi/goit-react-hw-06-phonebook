import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const { createSlice } = require('@reduxjs/toolkit');


const contactSlice = createSlice({
  name: 'contacts',
  initialState: {contacts: []},
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },
    deleteContact(state, action) {
      return state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;
