import React from "react";
import { TouchableHighlight, Image, } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function BackButton(props) {
	return (
		<TouchableHighlight
			underlayColor='rgba(255, 255, 255, 0.7)'
			style={styles.btnContainer}
			onPress={props.onPress}
		>
			<Image
				source={require("../../assets/icons/backArrow.png")}
				style={styles.btnIcon}
			/>
		</TouchableHighlight>
	);
}

BackButton.propTypes = {
	onPress: PropTypes.func,
	source: PropTypes.number,
	title: PropTypes.string,
};
