import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import ChatRoomData from "../assets/dummy-data/Chats";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";

const ChatRoomScreen = () => {
	const route = useRoute();
	const navigation = useNavigation();

	console.warn(route.params?.id);

	navigation.setOptions({title:"Elon Musk"});

	return (
		<SafeAreaView style={styles.page}>
			<FlatList
				data={ChatRoomData.messages}
				renderItem={({ item: message }) => <Message message={message} />}
				inverted
			/>
			<MessageInput />
		</SafeAreaView>
	);
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: "white",
	},
});
