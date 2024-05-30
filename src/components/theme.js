import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { DefaultTheme as PaperDefaultTheme, MD2DarkTheme as PaperDarkTheme } from 'react-native-paper';

export const CustomDefaultTheme = {
	...NavigationDefaultTheme,
	...PaperDefaultTheme,
	colors: {
		...NavigationDefaultTheme.colors,
		...PaperDefaultTheme.colors,
		background: '#ffffff',
		text: '#333333',
		secondaryContainer: 'transperent',
	},
};

export const CustomDarkTheme = {
	...NavigationDarkTheme,
	...PaperDarkTheme,
	colors: {
		...NavigationDarkTheme.colors,
		...PaperDarkTheme.colors,
		background: '#333333',
		text: '#ffffff',
	},
};
