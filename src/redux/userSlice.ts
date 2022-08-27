import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types/IUser';

const initialUserState: IUser = {
	cartItems: [],
	totalItems: 0,
};

export const userSlice = createSlice({
	name: 'userMutator',
	initialState: initialUserState,
	reducers: {
		addToCart: (state, action: PayloadAction<number>) => {
			const item = state.cartItems.find((x) => x.itemId === action.payload);
			if (item) {
				const index = state.cartItems.indexOf(item);
				state.cartItems[index].itemCount++;
			} else {
				state.cartItems.push({ itemId: action.payload, itemCount: 1 });
			}
			state.totalItems++;
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			const item = state.cartItems.find((x) => x.itemId === action.payload);
			if (item) {
				const index = state.cartItems.indexOf(item);
				state.cartItems[index].itemCount++;
			} else {
				state.cartItems = state.cartItems.filter((x) => x !== item);
			}
			state.totalItems--;
		},
	},
});

export const { addToCart, removeFromCart } = userSlice.actions;

export default userSlice.reducer;
