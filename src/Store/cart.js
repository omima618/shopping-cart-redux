import { createSlice } from '@reduxjs/toolkit';
const initialState = { cartItems: [], showCart: false, cartChanged: false };
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        replaceCart(state, action) {
            state.cartItems = action.payload;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            if (!existingItem) {
                state.cartItems.unshift({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                });
            } else {
                existingItem.quantity++;
            }
            state.cartChanged = true;
        },
        increaseQuantity(state, action) {
            const itemId = action.payload;
            const currentItem = state.cartItems.find(
                (item) => item.id === itemId
            );
            currentItem.quantity++;
            state.cartChanged = true;
        },
        decreaseQuantity(state, action) {
            const itemId = action.payload;
            const currentItem = state.cartItems.find(
                (item) => item.id === itemId
            );
            currentItem.quantity--;
            state.cartChanged = true;
        },
        removeItem(state, action) {
            const itemId = action.payload;
            const currentItemIndex = state.cartItems.findIndex(
                (item) => item.id === itemId
            );
            state.cartItems.splice(currentItemIndex, 1);
            state.cartChanged = true;
        },
    },
});
export const cartActions = cartSlice.actions;
