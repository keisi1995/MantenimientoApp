import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import{ AuthContext } from '../components/context';

export function DrawerContent(props) {
	const { navigation } = props;
	const theme = useTheme();
	const { loginState, authContext } = useContext(AuthContext);
	const { signOut, toggleTheme } = authContext;

	return(
		<View style={{flex:1}}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{flexDirection:'row', marginTop: 15}}>
							<Avatar.Image 
								source={{
									uri: 'https://dthezntil550i.cloudfront.net/f4/latest/f41908291942413280009640715/1280_960/1b2d9510-d66d-43a2-971a-cfcbb600e7fe.png'
								}}
								size={50}
							/>
							<View style={{marginLeft:15, flexDirection:'column'}}>
								<Title style={styles.title}>{loginState.first_name}</Title>
								<Caption style={styles.caption}>@{loginState.first_name}</Caption>
							</View>
						</View>

						<View style={styles.row}>
							<View style={styles.section}>
								<Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
								<Caption style={styles.caption}>Following</Caption>
							</View>
							<View style={styles.section}>
								<Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
								<Caption style={styles.caption}>Followers</Caption>
							</View>
						</View>
					</View>

					<Drawer.Section title="Menus" style={styles.drawerSection}>
						<DrawerItem 
							icon={({color, size}) => (
								<MaterialCommunityIcons  
									name="home-outline" 
									color={color}
									size={size}
								/>
							)}
							label="Home"
							onPress={() => {navigation.navigate('Home')}}
						/>
						<DrawerItem 
							icon={({color, size}) => (
								<Ionicons  
									name="settings-outline" 
									color={color}
									size={size}
								/>
							)}
							label="Settings"
							onPress={() => {navigation.navigate('SettingsScreen')}}
						/>					 
					</Drawer.Section>

					<Drawer.Section title="Preferencia">
						<TouchableRipple onPress={() => {toggleTheme()}}>
							<View style={styles.preference}>
								<Text>Dark Theme</Text>
								<View pointerEvents="none">
									<Switch value={theme.dark}/>
								</View>
							</View>
						</TouchableRipple>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>

			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem 
					icon={({color, size}) => (
						<MaterialCommunityIcons  
							name="exit-to-app" 
							color={color}
							size={size}
						/>
					)}
					label="Cerrar sesión"
					onPress={() => {signOut()}}
				/>
			</Drawer.Section>
		</View>
	);
}

const styles = StyleSheet.create({
	drawerContent: {
	  flex: 1,
	},
	userInfoSection: {
	  paddingLeft: 20,
	},
	title: {
	  fontSize: 16,
	  marginTop: 3,
	  fontWeight: 'bold',
	},
	caption: {
	  fontSize: 14,
	  lineHeight: 14,
	},
	row: {
	  marginTop: 20,
	  flexDirection: 'row',
	  alignItems: 'center',
	},
	section: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  marginRight: 15,
	},
	paragraph: {
	  fontWeight: 'bold',
	  marginRight: 3,
	},
	drawerSection: {
	  marginTop: 15,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: '#f4f4f4',
		borderTopWidth: 1
	},
	preference: {
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  paddingVertical: 12,
	  paddingHorizontal: 16,
	},
  });
