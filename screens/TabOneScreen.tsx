import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatRoomItem from "../components/ChatRoomItem";
import ChatRoomData from "../assets/dummy-data/ChatRooms"

const TabOneScreen = () => {
	return (
		<View style={styles.page}>
			<ChatRoomItem chatRoom={ChatRoomData[0]} />
			<ChatRoomItem chatRoom={ChatRoomData[2]}  />
		</View>
	);
};

export default TabOneScreen;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: "white",
	},
});
