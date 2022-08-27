import React, { useEffect } from 'react';
import { setConstantValue } from 'typescript';
import ProductCard from '../../Components/ProductCard';
import useFetchProducts from '../../hooks/useFetchProducts';
import IProduct from '../../types/IProduct';

const Home = () => {
	const { products, isFetchingProducts, error, setState } = useFetchProducts();

	if (isFetchingProducts) return <div>Loading</div>;

	if (error || !products) return <div>No products to show</div>;

	return (
		<div className='px-20 py-10 grid grid-cols-3 m-auto' style={{ maxWidth: 1700 }}>
			{products.map((product: IProduct) => (
				<ProductCard product={product} key={product.id} />
			))}
		</div>
	);
};

export default Home;
