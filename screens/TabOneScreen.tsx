import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ChatRoomsData from "../assets/dummy-data/ChatRooms";
import ChatRoomItem from "../components/ChatRoomItem";

const TabOneScreen = () => {
	return (
		<View style={styles.page}>
			<FlatList
				data={ChatRoomsData}
				renderItem={({ item: chatRoom }) => (
					<ChatRoomItem chatRoom={chatRoom} />
				)}
				showsVerticalScrollIndicator={false}
			/>
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
