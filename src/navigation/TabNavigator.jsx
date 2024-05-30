import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants/';
import HomeScreen from '../screens/Home/HomeScreen';
import FavoriteScreen from '../screens/Favorite/FavoriteScreen';

const Tab = createBottomTabNavigator();

const TabArr = [
	{ route: 'Home', label: 'Inicio', icon: 'find-replace', component: HomeScreen, tabBarColor: '#637aff', badge: false },
	{ route: 'Favorite', label: 'Favoritos', icon: 'cards-heart-outline', component: FavoriteScreen, tabBarColor: '#f8c907', badge: true },
];

const TabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: true,
				tabBarStyle: {
					backgroundColor: COLORS.color,
					height: 60,
					paddingBottom: 5,
					paddingTop: 5
				},
				tabBarInactiveTintColor: '#fff',
				tabBarActiveTintColor: 'blue',
			}}
		>
			{
				TabArr.map((_, index) => {
					return (
						<Tab.Screen
							key={index}
							name={_.route}
							component={_.component}
							options={{
								title: _.label,
								tabBarIcon: ({ color, size }) => (
									<MaterialCommunityIcons name={_.icon} size={25} color={color} />
								)
							}}
						/>
					)
				})
			}
		</Tab.Navigator>
	);
};

export default TabNavigator;
