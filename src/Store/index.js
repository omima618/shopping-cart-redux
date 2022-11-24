import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart';
import { notificationSlice } from './notification';
const Store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        notification: notificationSlice.reducer,
    },
});

export default Store;
