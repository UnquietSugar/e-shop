import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
	cartItems: number[];
}

const initialUserState: IUser = {
	cartItems: [],
};

export const userSlice = createSlice({
	name: 'userMutator',
	initialState: initialUserState,
	reducers: {
		addToCart: (state, action: PayloadAction<number>) => {
			state.cartItems.push(action.payload);
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.cartItems = state.cartItems.filter((x) => x !== action.payload);
		},
	},
});

export const { addToCart, removeFromCart } = userSlice.actions;

export default userSlice.reducer;
