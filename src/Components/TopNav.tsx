import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { matchPath, useLocation } from 'react-router-dom';

const TopNav = () => {
	const { pathname } = useLocation();

	const match = (path: string) =>
		path ? !!matchPath({ path, end: false }, pathname) : false;

	const getLiStyle = (path: string) =>
		cx(
			'px-5',
			match(path) ? 'underline text-color-c' : 'text-color-b hover:text-color-c'
		);

	console.log(pathname);
	return (
		<header className='flex justify-between py-3 px-10 bg-color-a font-roboto'>
			<p className='text-white text-3xl'>90's shop</p>
			<nav className='px-10'>
				<ul className='flex list-none text-2xl'>
					<li className={getLiStyle('/home')}>
						<Link to='/home'>Home</Link>
					</li>
					<li className={getLiStyle('/cart')}>
						<Link to='/cart'>Cart 0 items</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default TopNav;
