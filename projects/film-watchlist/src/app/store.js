import { configureStore } from "@reduxjs/toolkit";
import filmRducer from "../features/films/filmSlice";

// Create a Redux store with the film reducer
// This store will manage the state of films in the application

export const store = configureStore({
    reducer: {
        films: filmRducer,
    },
});