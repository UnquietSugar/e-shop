import React from 'react';
import { useRoutes } from 'react-router';
import Cart from './Pages/CartPage/Cart';
import Home from './Pages/HomePage/Home';
import Product from './Pages/ProductPage/Product';

const Routs = () => {
	return useRoutes([
		{
			path: '/home',
			element: <Home />,
		},
		{
			path: '/products/:id',
			element: <Product />,
		},
		{
			path: '/cart',
			element: <Cart />,
		},
		{
			path: '*',
			element: <h1 className='text-6xl text-center'>fallback page</h1>,
		},
	]);
};

export default Routs;
