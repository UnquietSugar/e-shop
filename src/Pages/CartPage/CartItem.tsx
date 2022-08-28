import React, { FC, useEffect, useState } from 'react';
import IProduct from '../../types/IProduct';
import { IUser } from '../../types/IUser';
import {
	addToCart,
	removeFromCart,
	totalPriceAdd,
	totalPriceSubtract,
} from '../../redux/userSlice';
import { useDispatch } from 'react-redux';

interface ICartItem {
	cartItem: IProduct;
	user: IUser;
}

const CartItem: FC<ICartItem> = ({ cartItem, user }) => {
	const [itemCount, setItemCount] = useState<number>();
	const dispatch = useDispatch();

	const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		dispatch(addToCart(cartItem.id));
		dispatch(totalPriceAdd(cartItem.price));
	};

	const removeItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		dispatch(removeFromCart(cartItem.id));
		dispatch(totalPriceSubtract(cartItem.price));
	};

	useEffect(() => {
		const count = user.cartItems.find((x) => x.itemId === cartItem.id)?.itemCount;
		setItemCount(count);
	});
	return (
		<div className='flex text-lg  py-3 border-b border-light-gray'>
			<p className='mx-10 flex-1'>{cartItem.price}$</p>
			<p className='mx-10 flex-1'>{cartItem.title}</p>
			<p className='mx-10 flex-1 flex justify-between'>
				<button onClick={addItem} className='font-bold text-xl'>
					+
				</button>
				{itemCount}
				<button onClick={removeItem} className='font-bold text-xl'>
					-
				</button>
			</p>
		</div>
	);
};

export default CartItem;
