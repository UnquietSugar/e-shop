import React, { FC, memo } from 'react';
import { selectUser } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../../redux/userSlice';
import useFetchSelectedProducts from '../../hooks/useFetchSelectedProducts';
import IProduct from '../../types/IProduct';
import CartItem from './CartItem';
import Swal from 'sweetalert2';
import buyCartItems from '../../service/buyCartItems';
import { useNavigate } from 'react-router-dom';

const Cart: FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const { products, error } = useFetchSelectedProducts(user.cartItems);

	if (!products)
		return (
			<div className='grid h-screen place-items-center'>
				You have nothing on your cart.
			</div>
		);

	if (error)
		return <div className='grid h-screen place-items-center'>No products to show</div>;

	const onBuy = async () => {
		const { isConfirmed } = await Swal.fire({
			title: 'Are you sure?',
			text: `You won't be able to revert this! \n Your totla is ${user.totalPrice}$.`,
			showCancelButton: true,
		});
		if (isConfirmed) {
			try {
				const resStatus = await buyCartItems(user.id, user.cartItems);
				console.log(resStatus);
				dispatch(resetCart());
				navigate('/home');
			} catch (e) {
				console.warn(e);
			}
		}
	};

	return (
		<div className='px-20 py-10 m-auto' style={{ maxWidth: 1000 }}>
			<div className='flex text-lg font-bold py-3 border-b'>
				<p className='mx-10 flex-1'>Price</p>
				<p className='mx-10 flex-1'>Product name</p>
				<p className='mx-10 flex-1'>Total count</p>
			</div>
			{products.map((cartItem: IProduct) => (
				<CartItem cartItem={cartItem} user={user} key={cartItem.id} />
			))}
			<div className='mt-10 flex justify-between'>
				<div>Total price: {user.totalPrice}$</div>
				<button
					className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-color-a py-2 px-4 border border-blue-500 hover:border-transparent  rounded'
					onClick={onBuy}>
					Buy
				</button>
			</div>
		</div>
	);
};

export default memo(Cart);
