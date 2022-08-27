import React, { FC, useEffect, useState } from 'react';
import IProduct from '../../types/IProduct';
import { IUser } from '../../types/IUser';

const CartItem: FC<{ cartItem: IProduct; user: IUser }> = ({ cartItem, user }) => {
	const [itemCount, setItemCount] = useState<number>();

	useEffect(() => {
		const count = user.cartItems.find((x) => x.itemId === cartItem.id)?.itemCount;
		setItemCount(count ?? 1);
	});
	return (
		<div className='flex' key={cartItem.id}>
			<p>Price per unit: {cartItem.price}$</p>
			<p>Product name: {cartItem.title}</p>
			<p>Items count: {itemCount}</p>
		</div>
	);
};

export default CartItem;
