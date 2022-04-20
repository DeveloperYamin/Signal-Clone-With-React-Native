import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const ChatRoomItem = ({
	chatRoom: {users, lastMessage, newMessages },
}) => {
	const user = users[1];
	return (
		<View style={styles.container}>
			<Image
				source={{
					uri: user.imageUri,
				}}
				style={styles.image}
			/>

			{newMessages && (
				<View style={styles.badgeContainer}>
					<Text style={styles.badgeText}>4</Text>
				</View>
			)}

			<View style={styles.rightContainer}>
				<View style={styles.row}>
					<Text style={styles.name}>{user.name}</Text>
					<Text style={styles.text}>{lastMessage.createdAt}</Text>
				</View>
				<Text numberOfLines={1} style={styles.text}>
					{lastMessage.content}
				</Text>
			</View>
		</View>
	);
};

export default ChatRoomItem;
