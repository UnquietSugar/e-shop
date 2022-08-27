export interface ICartItem {
	itemId: number;
	itemCount: number;
}

export interface IUser {
	cartItems: ICartItem[];
	totalItems: number;
}
