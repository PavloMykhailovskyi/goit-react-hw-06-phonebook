const { createSlice } = require("@reduxjs/toolkit");

const filterInitialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        changeFilter(state, action) {
            state = action.payload;
            return state
        },
    },
})

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;