import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import IProduct from '../types/IProduct';
import { addToCart, totalPriceAdd } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const ProductCard: FC<{ product: IProduct; isPreview?: boolean }> = ({
	product,
	isPreview = false,
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onGoToProduct = () => {
		navigate(`/products/${product.id}`);
	};
	const onAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		dispatch(addToCart(product.id));
		dispatch(totalPriceAdd(product.price));
	};
	return (
		<div
			role='gridcell'
			className='p-5 flex justify-center bg-color-b rounded mb-5 hover:brightness-105 cursor-pointer transition m-auto'
			onClick={onGoToProduct}
			style={{ minHeight: 200 }}>
			<div className='flex flex-col justify-between mr-5'>
				<h1>Name: {product.title}</h1>
				{!isPreview && (
					<div className='flex flex-col'>
						<p className='mb-5'>
							Price: <i>{product.price}$</i>
						</p>
						<button
							className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-color-a py-2 px-4 border border-blue-500 hover:border-transparent rounded'
							onClick={onAddToCart}>
							Add to cart
						</button>
					</div>
				)}
			</div>
			<div
				className='w-36 sm:w-64'
				style={{
					backgroundImage: `url("${process.env.PUBLIC_URL}/${product.image}")`,
					backgroundPosition: 'center',
					backgroundSize: 'contain',
				}}
			/>
		</div>
	);
};

export default ProductCard;
