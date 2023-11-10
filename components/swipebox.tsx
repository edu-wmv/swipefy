import { StyleSheet, View } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';

export default function SwipeBox() {
	return (
		<View style={styles.container}>
			<View style={styles.cardBox}>
				<View style={styles.card} />
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