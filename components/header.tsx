import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { getCurrentUserData } from '../utils/hooks';

export default function Header() {
	const [userData, setUserData] = React.useState<currentUserData>();

	React.useEffect(() => {
		(
			async function() {
				setUserData(await getCurrentUserData());
			}
		)();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Swipefy</Text>
			{/*<Text style={styles.playlists}>PLAYLIST</Text>*/}
			<Image source={{ uri: userData?.images[0].url }} style={styles.avatar} />
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
		marginVertical: 5,
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