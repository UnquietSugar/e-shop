import axios from 'axios';
import { ICartItem } from '../types/IUser';

const buyCartItems = (userId: number, payload: ICartItem[]) =>
	axios.put(`/users/${userId}`, { 'recent-products': payload }).then((res) => res.status);

export default buyCartItems;
