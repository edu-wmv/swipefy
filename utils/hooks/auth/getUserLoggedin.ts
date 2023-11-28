import { getFromSecureStore } from '../../secure_store';
import { reAuthUser } from './reAuthUser';

type userLoggedIn = {
	access_token: string | null,
	refresh_token: string | null,
	isUserLoggedIn: boolean
}

const getUserLoggedIn = async (): Promise<userLoggedIn> => {
	const access_token = await getFromSecureStore('access_token');
	const refresh_token = await getFromSecureStore('refresh_token');

	// check if access token is valid
	const response = await fetch('https://api.spotify.com/v1/me', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	if ((access_token !== null) && (refresh_token !== null)) {
		if (response.status === 200) {
			return {
				access_token,
				refresh_token,
				isUserLoggedIn: true
			};
		} if (response.status === 401) {
			// reauthenticate user
			return await reAuthUser(refresh_token);
		}	
	}

	return {
		access_token: null,
		refresh_token: null,
		isUserLoggedIn: false
	};
	
};

export { getUserLoggedIn };