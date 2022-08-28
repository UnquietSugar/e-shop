import axios from 'axios';
import { ICartItem } from '../Typess/IUser';

const buyCartItems = (userId: number, payload: ICartItem[]) =>
	axios.put(`/users/${userId}`, { 'recent-products': payload }).then((res) => res.status);

export default buyCartItems;
