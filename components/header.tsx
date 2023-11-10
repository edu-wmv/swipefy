import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function Header() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Swipefy</Text>
			<Text style={styles.playlists}>PLAYLIST</Text>
			<Image source={{ uri: 'https://dummyimage.com/400/000/fff.png&text=E' }} style={styles.avatar} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		marginTop: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#1DB954',
	},
	playlists: {

	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
});