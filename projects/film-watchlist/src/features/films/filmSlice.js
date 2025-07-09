import { createSlice, nanoid  } from "@reduxjs/toolkit";

const initialState = {
    filmItems: [],
    totalFilms: 0,
};


const filmSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        addFilm: (state,action) => {
            const newFilm = {
                id: nanoid(),
                title: action.payload,
                watched: false,
            };
            state.filmItems.push(newFilm);
            state.totalFilms += 1;
        },
        removeFilm: (state,action) => {
            state.filmItems = state.filmItems.filter(
                (film) => film.id !== action.payload
                
            );
            state.totalFilms = state.filmItems.length; 
        },
        clearFilm: (state) => {
            state.filmItems = [];
            state.totalFilms = 0;
        },
        toggleWatched: (state, action) => {
            const film = state.filmItems.find(
                (film) => film.id === action.payload);
                if (film) {
                    film.watched = !film.watched;
                }
        },
    },
});

export const {
    addFilm,
    removeFilm,
    clearFilm,
    toggleWatched,
} = filmSlice.actions;

export default filmSlice.reducer;