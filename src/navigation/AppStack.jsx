import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import MainTabScreen from './TabNavigator';
import SettingsScreen from '../screens/Settings/SettingsScreen';

const AppStack = () => {
	console.log('Renderizando Componenete AppStack')

	const Drawer = createDrawerNavigator();

	return (
		<Drawer.Navigator
			drawerContent={props => <DrawerContent {...props} />}
			screenOptions={{ headerShown: false }}
		>
			<Drawer.Screen
				name="HomeDrawer"
				component={MainTabScreen}
			/>
			<Drawer.Screen
				name="SettingsScreen"
				component={SettingsScreen}
			/>
		</Drawer.Navigator>
	);
};

export default AppStack;
