import React, { useState, useLayoutEffect, useEffect, useMemo } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import BackButton from "../../components/BackButton/BackButton";

const SettingsScreen = ({ navigation }) => {
	console.log('Renderizando Componenete Settings');

	// const { title } = route.params;
	// console.log(title);

	const { colors } = useTheme();

	const [count, setCount] = useState(0);
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [resultado, setResultado] = useState(0);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: true,
			headerTitle: '',
			headerTransparent: true,
			headerLeft: () => (
				<BackButton
					onPress={() => {
						navigation.goBack();
					}}
				/>
			),
			headerRight: () => <View />
		});
	}, []);

	const sumar = useMemo(() => {
		console.log('Calculando');
		return parseInt(value1) + parseInt(value2);
	}, [value1, value2]);

	useEffect(() => {
		console.log('UsseEffect')
		setResultado(sumar);
	}, [sumar]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ color: colors.text }}>Settings Screen</Text>

			<Text>Valor 1</Text>
			<TextInput
				onChangeText={(value) => setValue1(value)}
			/>

			<Text>Valor 2</Text>
			<TextInput
				onChangeText={(value) => setValue2(value)}
			/>

			<Text>Resultado {resultado}</Text>

			<Button
				title='Calcular'
				onPress={() => {
					setResultado(sumar);
				}}
			/>

			<Button
				title={`Increment ${count}`}
				onPress={() => {
					setCount(count + 1);
				}}
			/>
		</SafeAreaView>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		// backgroundColor: 'blue'
	},
});
