import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/Splash/SplashScreen';
import SignInScreen from '../screens/SignIn/SignInScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	console.log('Renderizando Componenete AuthStack')

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} headerMode='none'>
			<Stack.Screen name="SplashScreen" component={SplashScreen} />
			<Stack.Screen name="SignInScreen" component={SignInScreen} />
		</Stack.Navigator>
	);
};

export default AuthStack;
