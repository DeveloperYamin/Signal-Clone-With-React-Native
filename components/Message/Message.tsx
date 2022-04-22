import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const myId = "u1"

const Message = ({message}) => {
	const isMe = message.user.id === myId;

	return (
		<View
			style={{
				...styles.container,
				backgroundColor: isMe ? "lightgray" : "#3777f0",
				marginLeft: isMe ? "auto" : 10,
				marginRight: isMe ? 10 : "auto",
			}}
		>
			<Text style={{ color: isMe ? "black" : "white" }}>{message.content}</Text>
		</View>
	);
};

export default Message;
