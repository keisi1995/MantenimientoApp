import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../constants/';

const {width, height} = Dimensions.get('window');

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height / 4;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export const RecipeCard = StyleSheet.create({
	container: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#cccccc',
		borderWidth: 0.5,
		borderRadius: 0,
	},
	photo: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
	},
	titleContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	precioContainer: {
		position: 'absolute',
		bottom: 0,
		right: 0,

		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	precio: {
		color: '#FFF',
		fontSize: 15,
		fontWeight: 'bold',
	},
	title: {
		color: '#FFF',
		fontSize: 13,
	},
	category: {
		marginTop: 0,
		marginBottom: 2,
	},
});
