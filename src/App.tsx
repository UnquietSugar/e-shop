import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopNav from './Components/TopNav';
import Routs from './Routs';

function cartItems() {
	return [];
}

const App: FC = () => {
	return (
		<BrowserRouter>
			<TopNav />
			<Routs />
		</BrowserRouter>
	);
};

export default App;
