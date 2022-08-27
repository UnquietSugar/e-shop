import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import IProduct from '../types/IProduct';
import { addToCart } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onGoToProduct = () => {
		navigate(`/products/${product.id}`);
	};
	const onAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		dispatch(addToCart(product.id));
	};
	return (
		<div
			className='p-5 flex justify-between bg-color-b rounded mb-5 hover:brightness-105 cursor-pointer transition'
			onClick={onGoToProduct}
			style={{ width: 450, height: 200 }}>
			<div className='flex flex-col justify-between mr-5'>
				<h1>Name: {product.title}</h1>
				<p>Price: {product.price}$</p>
				<button
					className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-color-a py-2 px-4 border border-blue-500 hover:border-transparent  rounded'
					onClick={onAddToCart}>
					Add to cart
				</button>
			</div>

			<div
				style={{
					backgroundImage: `url("${process.env.PUBLIC_URL}/${product.image}")`,
					width: 250,
					backgroundPosition: 'center',
					backgroundSize: 'contain',
				}}
			/>
		</div>
	);
};

export default ProductCard;
