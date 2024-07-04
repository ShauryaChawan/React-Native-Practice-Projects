import { Button, TouchableOpacity, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'

export default function ColorScheme(): JSX.Element {
	// const isDarkMode = useColorScheme() === 'light'
	// const isDarkMode = useColorScheme() === 'dark'
	// const isDarkMode = useColorScheme();
	const [colorTheme, setColorTheme] = useState("dark");

	const handleColorTheme = () => {
		if (colorTheme == "dark") {
			setColorTheme("light")
		} else {
			setColorTheme("dark")
		}
	}

	return (
		<View>
			<Text style={ styles.heading }>Color Scheme</Text>
			<View style={ colorTheme === "dark" ? [styles.container, styles.darkContainer] : [styles.container, styles.whiteContainer] }>
				<Text style={ colorTheme === "dark" ? styles.whiteText : styles.darkText }>
					Hello World !
				</Text>
				{/* <Button
					onPress={ handleColorTheme }
					title="Change Theme"
				/> */}
				<TouchableOpacity style={ styles.button } onPress={ handleColorTheme }>
					<Text>Change Theme</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={ styles.button } onPress={ handleColorTheme }>
					<Text style={{textAlign: 'center'}}>Change Theme</Text>
				</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	heading: {
		fontSize: 24,
		fontWeight: 'bold',
		paddingHorizontal: 8
	},
	container: {
		padding: 20,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 5,
		margin: 5
	},
	whiteText: {
		color: '#FFFFFF',
	},
	darkContainer: {
		borderColor: 'white',
		backgroundColor: '#000000'
	},
	whiteContainer: {
		borderColor: 'black',
		backgroundColor: '#FFFFFF',
	},
	darkText: {
		color: '#000000'
	},
	button: {
		margin: 8,
		padding: 8,
		backgroundColor: '#CAD5E2',
		borderRadius: 5,
	}
})