import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';

export const store = configureStore({
	reducer: {
		user: userSlice,
	},
});

type RoodState = ReturnType<typeof store.getState>;

export const selectUser = (state: RoodState) => state.user;
