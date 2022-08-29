import React from 'react';
import Loader from '../../Components/Loader';
import ProductCard from '../../Components/ProductCard';
import useFetchProducts from '../../hooks/useFetchProducts';
import IProduct from '../../types/IProduct';

const Home = () => {
	const { products, isFetchingProducts, error } = useFetchProducts();

	if (error)
		return (
			<div className='grid h-screen place-items-center px-10'>
				No products to show, please check if server is running.{' '}
				{`("npm run my-server"/ if command is unrecognised please install json-server globally "npm i -g json-server")`}
			</div>
		);

	if (isFetchingProducts) return <Loader />;

	return (
		<div className='md:px-20 py-10 lg:grid lg:grid-cols-3 m-auto'>
			{products.map((product: IProduct) => (
				<ProductCard product={product} key={product.id} />
			))}
		</div>
	);
};

export default Home;
