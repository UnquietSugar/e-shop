import axios from 'axios';
import useSWRImmutable from 'swr/immutable';
import { selectUser } from '../redux/store';
import { useSelector } from 'react-redux';
import { ICartItem } from '../types/IUser';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useFetchCartItems = (cartArray: ICartItem[]) => {
	const cartItemsUrl = cartArray.map((x) => `id=${x.itemId}&`).join('');
	const { data, error, mutate } = useSWRImmutable(
		cartArray.length > 0 ? `/products?${cartItemsUrl}` : null,
		fetcher
	);

	return {
		cartItems: data,
		isFetchingCartItems: !data && !error,
		error: error,
	};
};

export default useFetchCartItems;
