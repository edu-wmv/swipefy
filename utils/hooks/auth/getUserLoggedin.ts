import { getFromSecureStore } from '../../secure_store';
import { reAuthUser } from './reAuthUser';

type userLoggedIn = {
	access_token: string | null,
	refresh_token: string | null,
	isUserLoggedIn: boolean
}

const getUserLoggedIn = async (): Promise<userLoggedIn> => {
	const access_token = await getFromSecureStore('accessToken') || '';
	const refresh_token = await getFromSecureStore('refreshToken') || '';

	// check if access token is valid
	const response = await fetch('https://api.spotify.com/v1/me', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	if (response.status === 200) {
		return {
			access_token,
			refresh_token,
			isUserLoggedIn: true
		};
	} if (response.status === 401) {
		// reauthenticate user
		return await reAuthUser(access_token, refresh_token);
	}	else {
		return {
			access_token: null,
			refresh_token: null,
			isUserLoggedIn: false
		};
	}
};

export { getUserLoggedIn };