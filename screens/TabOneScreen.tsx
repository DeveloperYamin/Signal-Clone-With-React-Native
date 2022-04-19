import { StyleSheet, Text, View } from "react-native";

import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
	navigation,
}: RootTabScreenProps<"TabOne">) {
	return (
		<View style={styles.container}>
			<Text>Tab One</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
});
