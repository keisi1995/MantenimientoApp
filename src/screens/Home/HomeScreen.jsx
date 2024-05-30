import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Screen Home</Text>
		</View>
	);
};

export default HomeScreen;