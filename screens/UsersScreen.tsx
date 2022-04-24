import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import UsersData from "../assets/dummy-data/Users";
import UserItem from "../components/UserItem";

const UsersScreen = () => {
	return (
		<View style={styles.page}>
			<FlatList
				data={UsersData}
				renderItem={({ item: user }) => <UserItem user={user} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default UsersScreen;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: "white",
	},
});
