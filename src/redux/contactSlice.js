
const { createSlice } = require('@reduxjs/toolkit');


const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    deleteContact(state, action) {
      state = state.filter(contact => contact.id !== action.payload);
      return state;
    },
  },
});


// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );
export const contactsReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
