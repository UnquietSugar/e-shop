import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { matchPath, useLocation } from 'react-router-dom';
import { selectUser } from '../redux/store';
import { useSelector } from 'react-redux';

const TopNav = () => {
	const { pathname } = useLocation();
	const user = useSelector(selectUser);

	const match = (path: string) =>
		path ? !!matchPath({ path, end: false }, pathname) : false;

	const getLiStyle = (path: string) =>
		cx(
			'px-5',
			match(path) ? 'text-color-d' : 'text-color-b hover:text-color-c transition'
		);

	return (
		<header className='flex justify-between py-3 px-10 bg-color-a font-roboto'>
			<p className='text-white text-3xl text-bold'>THE SHOP</p>
			<nav className='px-10'>
				<ul className='flex list-none text-2xl'>
					<li className={getLiStyle('/home')}>
						<Link to='/home'>Home</Link>
					</li>
					<li className={getLiStyle('/cart')}>
						<Link to='/cart'>
							<span>Cart</span>
							{user.totalItems > 0 && (
								<span className='text-sm text-color-d align-text-top'>
									<b>{user.totalItems}</b>
								</span>
							)}
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default TopNav;
