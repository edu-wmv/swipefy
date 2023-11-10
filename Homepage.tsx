import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';

async function checkIfLoggedIn() {
	const accessToken = await SecureStore.getItemAsync('accessToken');
	const refreshToken = await SecureStore.getItemAsync('refreshToken');

	return { accessToken, refreshToken };
}

export default function Homepage({ navigation }: HomepageScreenProps) {
	checkIfLoggedIn().then((tokens) => {
		if (!tokens.accessToken || !tokens.refreshToken) {
			navigation.navigate('Login');
		} else {
			navigation.navigate('Swipe');
		}
	});

	return (
		<View style={styles.container}>
			<Text>Redirect Page</Text>
			<TouchableOpacity onPress={() => navigation.navigate('Login')}>
				<Text>Login page</Text>
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
});
