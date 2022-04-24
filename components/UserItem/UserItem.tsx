import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const UserItem = ({
	chatRoom: { id, users, lastMessage, newMessages },
}: any) => {
	const user = users[1];

	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate<any>("ChatRoom", { id });
	};

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={onPress}
			style={styles.container}
		>
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
		</TouchableOpacity>
	);
};

export default UserItem;
