import axios from 'axios';
import useSWRImmutable from 'swr/immutable';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useFetchProduct = (id: string) => {
	const { data, error } = useSWRImmutable(`/products/${id}`, fetcher);

	return { product: data, isFetchingProducts: !data && !error, error: error };
};

export default useFetchProduct;
