import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state,action) => {
        state.cartItems.push(action.payload);
      },
      removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
      },
      clearCart: (state) => {
        state.cartItems = [];
      },
      getCartTotal: (state) => {
          let totalQuantity = 0;
          let totalAmount = 0;

          state.cartItems.forEach((item) => {
            totalQuantity += 1;
            totalAmount += item.price;
          });

          state.cartTotalQuantity = totalQuantity;
          state.cartTotalAmount = totalAmount;      }
    },
})

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer