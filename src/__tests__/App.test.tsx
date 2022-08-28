import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { store } from '../redux/store';

const prods = [
	{
		id: 1,
		title: 'Product A',
		image: 'images/a.jpg',
		price: 20,
	},
	{
		id: 2,
		title: 'Product B',
		image: 'images/b.jpg',
		price: 30,
	},
];

jest.mock('../hooks/useFetchProducts', () => () => ({
	products: prods,
	isFetchingProducts: false,
	error: false,
}));
jest.mock('../hooks/useFetchProduct', () => () => ({
	products: prods[0],
	isFetchingProducts: false,
	error: false,
}));
jest.mock('../hooks/useFetchSelectedProducts', () => () => ({
	products: prods,
	isFetchingProducts: false,
	error: false,
}));

describe('E-Shop UI tests (happy path)', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		jest.clearAllTimers();
	});
	afterEach(() => {
		jest.clearAllMocks();
		jest.clearAllTimers();
	});

	it('should render navigation bar', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);
		const shopName = screen.getByText(/the shop/i);
		const homeBtn = screen.getByText('Home');
		const cartBtn = screen.getByText('Cart');
		expect(shopName).toBeInTheDocument();
		expect(homeBtn).toBeInTheDocument();
		expect(cartBtn).toBeInTheDocument();
	});

	test('navigation buttons should change url', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);

		const buttons = screen.getAllByRole(/link/i);
		const homeBtn = buttons[0];
		const cartBtn = buttons[1];

		expect(window.location.href).toContain('/home');
		fireEvent.click(cartBtn);
		expect(window.location.href).toContain('/cart');
		fireEvent.click(homeBtn);
		expect(window.location.href).toContain('/home');
	});

	it('should contain products', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);

		const productA = screen.getByText(/product a/i);
		const productB = screen.getByText(/product b/i);

		expect(productA).toBeInTheDocument();
		expect(productB).toBeInTheDocument();
	});

	it('should increase counter of the cart.', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);

		const addButton = screen.getAllByText(/add to cart/i)[0];
		fireEvent.click(addButton);
		fireEvent.click(addButton);
		const cartBtn = screen.getAllByRole('link')[1];
		expect(cartBtn.innerHTML).toContain('2');
	});

	it('should navigate to product page', async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);
		expect(window.location.href).toContain('/home');
		const productA = screen.getByText(/name: product a/i);
		fireEvent.click(productA);
		expect(window.location.href).toContain('/products/1');
	});

	it('should mimic the purchase', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);
		const cartBtn = screen.getAllByRole('link')[1];
		expect(cartBtn).toBeInTheDocument();
		fireEvent.click(cartBtn);
		expect(window.location.href).toContain('/cart');
		const buyBtn = screen.getByText(/buy/i);
		expect(buyBtn).toBeInTheDocument();
		expect(window.location.href).toContain('/cart');
		fireEvent.click(buyBtn);
		const okBtn = screen.getByText(/ok/i);
		expect(okBtn).toBeInTheDocument();
		fireEvent.click(okBtn);
		expect(okBtn).not.toBeInTheDocument();
	});
});
