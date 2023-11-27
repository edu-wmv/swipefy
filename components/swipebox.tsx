import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { getCurrentUserData } from '../utils/hooks';

export default function SwipeBox() {
	const [user, setUser] = React.useState<currentUserData>();

	React.useEffect(() => {
		(
			async () => {
				console.log('fetching user data');
				setUser(await getCurrentUserData());
			}
		)();
	});


	return (
		<View style={styles.container}>
			<View style={styles.cardBox}>
				<View style={styles.card}>
					<Image source={{ uri: user?.images[1].url }} style={{ width: 200, height: 200 }} />
					<Text>{user?.display_name}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#f0f0f0',
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
	},
	cardBox: {
		justifyContent: 'center',
		alignItems: 'center',
		width: moderateScale(350),
		height: '80%'
	},
	card: {
		backgroundColor: 'blue',
		width: '100%',
		height: '100%',
	}
});