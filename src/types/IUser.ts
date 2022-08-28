export interface ICartItem {
	itemId: number;
	itemCount: number;
}

export interface IUser {
	id: number;
	cartItems: ICartItem[];
	totalItems: number;
	totalPrice: number;
}
