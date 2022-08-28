import React from 'react';
import { useRoutes } from 'react-router';
import Cart from './pages/cartPage/Cart';
import Home from './pages/homePage/Home';
import Product from './pages/productPage/Product';

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
