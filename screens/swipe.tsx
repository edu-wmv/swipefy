import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, SwipeBox } from '../components';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SwipePage() {
	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<SwipeBox />
			<StatusBar style='dark' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f0f0',
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
	}
});