import { useStore } from '../context';
import { getFromSecureStore } from './secure_store';

export async function setUser() {
	const setUser = useStore((user) => user.setUser);
	
	const access_token = await getFromSecureStore('accessToken') || '';
	const refresh_token = await getFromSecureStore('refreshToken') || '';

	setUser({
		access_token,
		refresh_token,
	});
}