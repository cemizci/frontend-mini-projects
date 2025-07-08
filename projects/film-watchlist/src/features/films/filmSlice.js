import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filmItems: [],
    totalFilms: 0,
};


const filmSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        addFilm: (state,action) => {
            state.filmItems.push(action.payload);
            state.totalFilms += 1;
        },
        removeFilm: (state,action) => {
            state.filmItems = state.filmItems.filter(
                (film) => film.id !== action.payload
            );
        },
        clearFilm: (state) => {
            state.filmItems = [];
            state.totalFilms = 0;
        },
        calculateTotalFilms: (state) => {
            state.totalFilms = state.filmItems.length; 
        },
    },
});

export const {
    addFilm,
    removeFilm,
    clearFilm,
    calculateTotalFilms,
} = filmSlice.actions;

export default filmSlice.reducer;