import { useAuthStore } from '../../context/store';

export async function getCurrentUserData(): Promise<currentUserData> {
	const user = useAuthStore.getState().user;
	const access_token = user.access_token;
	const response = await fetch('https://api.spotify.com/v1/me', {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
	const data = await response.json();
	return data;
}

