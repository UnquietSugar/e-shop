import axios from 'axios';
import useSWRImmutable from 'swr/immutable';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useFetchProducts = () => {
	const { data, error, mutate } = useSWRImmutable(`/products`, fetcher);

	return {
		setState: mutate,
		products: data,
		isFetchingProducts: !data && !error,
		error: error,
	};
};

export default useFetchProducts;
