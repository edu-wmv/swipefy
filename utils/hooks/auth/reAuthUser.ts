import axios from 'axios';

const reAuthUser = async (access_token: string, refresh_token: string) => {
	const response = await axios({
		method: 'post',
		url: 'https://accounts.spotify.com/api/token',
		data: {
			client_id: process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID,
			grant_type: 'refresh_token',
			refresh_token,
		},
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	return {
		access_token: response.data.access_token,
		refresh_token: response.data.refresh_token,
		isUserLoggedIn: true
	};
};

export { reAuthUser };