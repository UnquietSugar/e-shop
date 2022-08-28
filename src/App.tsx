import React, { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TopNav from './Components/TopNav';
import Routs from './Routs';
import initAxios from './Utilities/initAxios';

const App: FC = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	initAxios();

	useEffect(() => {
		if (pathname === '/') navigate('/home');
	}, [navigate, pathname]);

	return (
		<main>
			<TopNav />
			<Routs />
		</main>
	);
};

export default App;
