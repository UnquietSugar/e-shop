import axios from 'axios';
import useSWRImmutable from 'swr/immutable';
import { selectUser } from '../redux/store';
import { useSelector } from 'react-redux';
import { ICartItem } from '../types/IUser';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useFetchSelectedProducts = (array: ICartItem[]) => {
	const itemsUrl = array.map((x) => `id=${x.itemId}&`).join('');
	const { data, error } = useSWRImmutable(
		array.length > 0 ? `/products?${itemsUrl}` : null,
		fetcher
	);

	return {
		products: data,
		isFetchingProducts: !data && !error,
		error: error,
	};
};

export default useFetchSelectedProducts;
