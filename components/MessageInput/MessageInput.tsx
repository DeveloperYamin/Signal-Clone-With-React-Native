import {
	AntDesign,
	Feather,
	Ionicons,
	MaterialCommunityIcons,
	SimpleLineIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	Platform,
	Pressable,
	TextInput,
	View,
} from "react-native";
import { styles } from "./styles";

const MessageInput = () => {
	const [message, setMessage] = useState("");

	const sendMessage = () => {
		console.warn("sendMessage");

		setMessage("");
	};

	const onPlusClicked = () => {
		console.warn("onPlusClicked");
	};

	return (
		<KeyboardAvoidingView
			style={styles.root}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={110}
		>
			<View style={styles.inputContainer}>
				<SimpleLineIcons
					name="emotsmile"
					size={24}
					color="#595959"
					style={styles.icon}
				/>
				<TextInput
					style={styles.input}
					placeholder="Singal message..."
					value={message}
					onChangeText={setMessage}
				/>
				<Feather name="camera" size={24} color="#595959" style={styles.icon} />
				<MaterialCommunityIcons
					name="microphone-outline"
					size={24}
					color="#595959"
					style={styles.icon}
				/>
			</View>
			<Pressable
				onPress={() => (message ? sendMessage() : onPlusClicked())}
				style={styles.buttonContainer}
			>
				{message ? (
					<Ionicons name="send" size={20} color="white" />
				) : (
					<AntDesign name="plus" size={24} color="white" />
				)}
			</Pressable>
		</KeyboardAvoidingView>
	);
};

export default MessageInput;
