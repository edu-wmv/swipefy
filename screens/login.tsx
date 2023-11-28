import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { Entypo } from '@expo/vector-icons';
import { exchangeCodeForToken } from '../utils/login_flow';
import { useAuthStore } from '../context/store';
import { getFromSecureStore } from '../utils';

WebBrowser.maybeCompleteAuthSession();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function LoginScreen({ navigation }: LoginScreenProps) {
	const setUser = useAuthStore((state) => state.setUser);

	const [request, response, promptAsync] = AuthSession.useAuthRequest(
		{
			responseType: AuthSession.ResponseType.Code,
			clientId: process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID || '',
			scopes: [
				'user-read-email',
				'user-read-private',
				'playlist-modify-private',
			],
			redirectUri: AuthSession.makeRedirectUri({ path: 'callback' }),
			usePKCE: true,
		},
		{
			authorizationEndpoint: 'https://accounts.spotify.com/authorize'
		}
	);

	const _handleAuth = async () => {
		await promptAsync();
		if (response?.type === 'success' && request?.codeVerifier) {
			await exchangeCodeForToken(response.params.code, request.codeVerifier);
			const access_token = await getFromSecureStore('access_token');
			const refresh_token = await getFromSecureStore('refresh_token');
			(access_token && refresh_token) && setUser({ access_token, refresh_token, isUserLoggedIn: true });
			navigation.navigate('Swipe');
		} else {
			Alert.alert('Error', 'Something went wrong');
		}
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={_handleAuth} activeOpacity={0.65} disabled={!request}>
				<View style={styles.buttonContainer}>
					<Entypo name="spotify" size={24} color="white" />
					<Text style={styles.buttonText}>Log in</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		backgroundColor: '#1DB954',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		marginLeft: 10,
	},
});
