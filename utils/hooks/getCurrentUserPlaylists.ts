import axios from 'axios';
import { useAuthStore } from '../../context/store';

export async function getCurrentUserPlaylists(): Promise<currentUserPlaylists> {
	const user = useAuthStore.getState().user;

	const response = await axios({
		method: 'get',
		url: 'https://api.spotify.com/v1/me/playlists',
		headers: {
			Authorization: `Bearer ${user.access_token}`,
		},
		data: {
			limit: 10,
		}
	});

	console.log(response.data);
	return response.data;
}