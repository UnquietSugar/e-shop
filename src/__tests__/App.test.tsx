import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { store } from '../redux/store';

describe('E-Shop UI tests', () => {
	it('renders nav bar', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);
		const shopName = screen.getByText(/the shop/i);
		const homeBtn = screen.getByText(/home/i);
		const cartBtn = screen.getByText(/cart/i);
		expect(shopName).toBeInTheDocument();
		expect(homeBtn).toBeInTheDocument();
		expect(cartBtn).toBeInTheDocument();
	});

	it('reacts to pressing buttons', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);

		const buttons = screen.getAllByRole(/button/i);
		const homeBtn = buttons[0];
		const cartBtn = buttons[1];

		expect(window.location.href).toContain('/home');
		fireEvent.click(cartBtn);
		expect(window.location.href).toContain('/cart');
		fireEvent.click(homeBtn);
		expect(window.location.href).toContain('/home');
	});
});
