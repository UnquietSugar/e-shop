import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types/IUser';

const initialUserState: IUser = {
	id: 99, // Since no user functionality is implemented user ID is hardcoded. It's also hardcoded in db.json
	cartItems: [],
	totalItems: 0,
	totalPrice: 0,
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
				if (state.cartItems[index].itemCount > 1) {
					state.cartItems[index].itemCount--;
				} else {
					state.cartItems = state.cartItems.filter((x) => x !== item);
				}
			}
			state.totalItems--;
		},
		totalPriceAdd: (state, action: PayloadAction<number>) => {
			state.totalPrice += Number(action.payload);
		},
		totalPriceSubtract: (state, action: PayloadAction<number>) => {
			state.totalPrice -= Number(action.payload);
		},
	},
});

export const { addToCart, removeFromCart, totalPriceAdd, totalPriceSubtract } =
	userSlice.actions;

export default userSlice.reducer;
