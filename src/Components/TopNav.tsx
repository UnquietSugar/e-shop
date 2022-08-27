import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
	return (
		<header className='flex justify-between py-3 px-10 bg-color-a font-roboto'>
			<h1 className='text-light-gray text-2xl'>90's shop</h1>
			<nav className='px-10'>
				<ul className='flex list-none text-gray'>
					<li className='px-5'>
						<Link to='/'>Home</Link>
					</li>
					<li className='px-5'>
						<Link to='/cart'>Cart {`({cartItems().length}`})</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default TopNav;
