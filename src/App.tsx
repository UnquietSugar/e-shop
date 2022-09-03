import React, { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TopNav from 'Components/TopNav';
import Routs from 'Routs';
import initAxios from 'utilities/initAxios';

const App: FC = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	initAxios();

	useEffect(() => {
		if (pathname === '/') navigate('/home');
	}, [navigate, pathname]);

	const alertUser = (e: any) => {
		e.preventDefault();
		e.returnValue = '';
	};
	useEffect(() => {
		window.addEventListener('beforeunload', alertUser);
		return () => {
			window.removeEventListener('beforeunload', alertUser);
		};
	}, []);

	return (
		<main>
			<TopNav />
			<Routs />
		</main>
	);
};

export default App;
