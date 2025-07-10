import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);

            state.totalQuantity++;

            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            state.totalAmount += newItem.price;
        },
        removeItem : (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            
            if (!existingItem) return; 
            state.totalQuantity--;
            state.totalAmount -= existingItem.price;

            if(existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id); 
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }       
    },
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;