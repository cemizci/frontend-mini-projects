import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bookItems: [],
    bookTotalCount: 0,
}

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state,action) => {
            state.bookItems.push(action.payload);
        },
        removeBook: (state, action) => {
            state.bookItems = state.bookItems.filter(
                (book) => book.id !== action.payload 
        )},
        clearBooks: (state) => {
            state.bookItems = [];
        },
        calculateBookTotal: (state) => {
            state.bookTotalCount = state.bookItems.length;
        },
    },
 })

 export const { addBook, removeBook, clearBooks, calculateBookTotal } = bookSlice.actions;

 export default bookSlice.reducer;