import axios from 'axios';
import { makeRedirectUri } from 'expo-auth-session';
import { saveOnSecureStore } from './secure_store';

export async function exchangeCodeForToken(code: string, code_verifier: string): Promise<number> {  

	const response = await axios({
		method: 'post',
		url: 'https://accounts.spotify.com/api/token',
		data: {
			client_id: process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID,
			grant_type: 'authorization_code',
			code,
			redirect_uri: makeRedirectUri({ path: 'callback' }),
			code_verifier,
		},
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	if (response.status === 200) {
		saveOnSecureStore('access_token', response.data.access_token);
		saveOnSecureStore('refresh_token', response.data.refresh_token);
		return response.status;
	} else {
		return response.status;
	}
}