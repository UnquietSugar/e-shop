import React from 'react';
import { selectUser } from '../../redux/store';
import { useSelector } from 'react-redux';
import useFetchCartItems from '../../hooks/useFetchCartItems';
import IProduct from '../../types/IProduct';
import CartItem from './CartItem';

const Cart = () => {
	const user = useSelector(selectUser);
	const { cartItems, isFetchingCartItems, error } = useFetchCartItems(user.cartItems);

	if (!cartItems) return <div>You have nothing on your cart.</div>;

	if (isFetchingCartItems) return <div>Loading</div>;

	if (error) return <div>No products to show</div>;

	return (
		<div className='px-20 py-10 m-auto' style={{ maxWidth: 1700 }}>
			{cartItems.map((cartItem: IProduct) => (
				<CartItem cartItem={cartItem} user={user} />
			))}
		</div>
	);
};

export default Cart;
