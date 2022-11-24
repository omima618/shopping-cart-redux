import { createSlice } from '@reduxjs/toolkit';

const initialState = { notification: null };
export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotifiaction(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export const notificationActions = notificationSlice.actions;
