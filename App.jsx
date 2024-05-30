// import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useMemo, useReducer } from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider} from 'react-native-paper';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import { AuthContext } from './src/components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomDarkTheme, CustomDefaultTheme }  from './src/components/theme';
import LottieView from 'lottie-react-native';
import {jwtDecode }  from 'jwt-decode';

console.log('Iniciando Componenete App')

const App = () => {
	console.log('Renderizando Componenete App')

	const [isDarkTheme, setIsDarkTheme] = useState(false);		
	const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
	
	// Definimos el reducer
	const loginReducer = (prevState, action) => {
		switch( action.type ) {
			case 'RETRIEVE_TOKEN': 
				return { ...prevState, id: action.id, first_name: action.first_name, token: action.token, isLoading: false };
			case 'LOGIN': 
				return { ...prevState, id: action.id, first_name: action.first_name, token: action.token, isLoading: false };
			case 'LOGOUT': 
				return { ...prevState, id: null, first_name: null, token: null, isLoading: false }; 
		}
	};

	const [loginState, dispatch] = useReducer(loginReducer, { id: null, first_name: null, token: null, isLoading: true });	
	
	const authContext = useMemo(() => ({
		signIn: async(foundUser) => {
			const dataToken = {
				id: String(foundUser._id),
				first_name: String(foundUser.first_name),
				token: String(foundUser.token)
			}

			try {
				await AsyncStorage.setItem('dataToken', JSON.stringify(dataToken));
			} catch(e) {
				console.log(e);
			}
	
			dispatch({ type: 'LOGIN', ...dataToken});
		},
		signOut: async() => {
			try {
				await AsyncStorage.removeItem('dataToken');
			} catch(e) {
				console.log(e);
			}
			dispatch({ type: 'LOGOUT' });
		},
		signUp: () => {
		},
		toggleTheme: () => {
			setIsDarkTheme(isDarkTheme => !isDarkTheme);
		},
		getData: () => {
			console.log(loginState)
			return loginState;
		}
	}), []);
	
	useEffect(() => {
		setTimeout(async() => {
			let dataToken = null;
			try {
				dataToken = await AsyncStorage.getItem('dataToken');		
			} catch(e) {
				console.log(e);
			}

			if (dataToken) {
				let objToken = JSON.parse(dataToken)									
				let token = jwtDecode(String(objToken.token))				
				const expiracion = new Date(token.exp * 1000);
				if (expiracion < new Date()) {
					// El token está inactivo
					dispatch({ type: 'LOGOUT' });
				} else {
					// El token está activo
					dispatch({ type: 'RETRIEVE_TOKEN', ...JSON.parse(dataToken) });
				}
			} else {
				dispatch({ type: 'RETRIEVE_TOKEN', id: null, first_name: null, token: null, isLoading: false });
			}
		}, 3000);
	}, []);
	
	if( loginState.isLoading ) {
		return(
			<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
				{/* <ActivityIndicator size="large"/> */}
				<LottieView
					source={require('./src/assets/animation/cat-animation.json')}
					style={{width: "50%", height: "50%"}}
					autoPlay
					loop
				/>
			</View>
		);
	}

	return (
		<>
			<StatusBar backgroundColor={isDarkTheme ? "black" : "white"}  barStyle= { isDarkTheme ? "light-content" : "dark-content" } />
			<PaperProvider theme={theme}>
				<AuthContext.Provider value={{loginState, authContext}}>
					<NavigationContainer theme={theme}>
						{
							loginState.token !== null ? <AppStack/> : <AuthStack/>							
						}
					</NavigationContainer>
				</AuthContext.Provider>
			</PaperProvider>
		</>
	);
}

export default App;
