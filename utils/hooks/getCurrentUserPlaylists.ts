import { getFromSecureStore } from '../secure_store';

export async function getCurrentUserPlaylists(): Promise<currentUserPlaylists> {
	const access_token = await getFromSecureStore('access_token');
	const response = await fetch('https://api.spotify.com/v1/me/playlists', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	const data = await response.json();
	return data;
}