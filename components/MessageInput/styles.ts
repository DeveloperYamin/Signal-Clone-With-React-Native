import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	root: {
		flexDirection: "row",
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	inputContainer: {
		backgroundColor: "#f2f2f2",
		flex: 1,
		marginRight: 10,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: "#dedede",
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		padding: 5,
	},
	icon: {
		marginHorizontal: 5,
	},
	input: {
		flex: 1,
		marginHorizontal: 5,
	},
	buttonContainer: {
		width: 40,
		height: 40,
		backgroundColor: "#3777f0",
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	}
});
