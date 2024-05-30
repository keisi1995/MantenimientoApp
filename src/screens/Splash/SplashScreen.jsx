import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import { images } from '../../constants/';
import styles from './styles';

const SplashScreen = ({ navigation }) => {
	const { colors } = useTheme();

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<View style={{
					borderRadius: 20,
					height: 60,
					backgroundColor: '#FFFFFF',
					justifyContent: 'center',
					// alignItems: 'center'
				}}>
					<TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
						<Text style={{
							color: 'black',
							fontWeight: 'bold',
							textAlign: 'center',
							fontSize: 25,
						}}>!Empezar!</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default SplashScreen;
