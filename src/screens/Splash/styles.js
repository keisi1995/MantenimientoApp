import {StyleSheet} from 'react-native';
import { COLORS } from '../../constants/';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.color,
		paddingHorizontal: 20,
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 350,
		height: 300,
	},
	main: {
		flex: 1,
	},
});

export default styles;
