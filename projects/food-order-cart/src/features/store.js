import { configureStore } from "@reduxjs/toolkit"; 
import cartReducer from "../app/cartSlice.js";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});