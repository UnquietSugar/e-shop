import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchProduct from '../../hooks/useFetchProduct';
import { addToCart, totalPriceAdd } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';

const Product = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const { product } = useFetchProduct(params.id ?? '');

	const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation();
		dispatch(addToCart(product.id));
		dispatch(totalPriceAdd(product.price));
	};

	if (!product)
		return (
			<div className='grid h-screen place-items-center'>404. Can't find the product.</div>
		);

	return (
		<div
			className='flex flex-col sm:flex-row justify-between px-20 py-10 m-auto'
			style={{ maxWidth: 1000 }}>
			<div className='flex flex-col justify-between'>
				<h1 className='text-2xl'>Name: {product.title}</h1>
				<p className='text-2xl'>
					Price: <i>{product.price}$</i>
				</p>

				<button
					onClick={addItem}
					className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-color-a py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
					Add to cart
				</button>
			</div>

			<div>
				<img src={`${process.env.PUBLIC_URL}/${product.image}`} width={640} alt='asd' />
			</div>
		</div>
	);
};

export default Product;
