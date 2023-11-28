import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';

export default function SwipeBox() {
	return (
		<View style={styles.container}>
			<View style={styles.cardBox}>
				<View style={styles.card}>
					<Image source={{ uri: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647' }} style={styles.cover} />
					<Text>Afterglow</Text>
					<Text>Taylor Swift</Text>
					<View>
						
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '100%',
		height: '100%',
		paddingTop: 40
	},
	cardBox: {
		justifyContent: 'center',
		alignItems: 'center',
		width: moderateScale(350),
		height: '80%'
	},
	card: {
		backgroundColor: '#fafafa',
		width: '100%',
		height: '100%',
		borderRadius: 15,
		flex: 1,
		alignItems: 'center',
		paddingTop: 30
	},
	cover: {
		width: '80%',
		aspectRatio: 1/1,
		borderRadius: 10
	}
});