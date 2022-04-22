/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather } from "@expo/vector-icons";
import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
	ColorSchemeName,
	Image,
	Pressable,
	Text,
	useWindowDimensions,
	View,
	Platform,
} from "react-native";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerTitle:HomeHeader}}
			/>
			<Stack.Screen
				name="ChatRoom"
				component={ChatRoomScreen}
				options={() => ({
					headerTitle: ChatRoomHeader,
					headerBackTitleVisible: false,
				})}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: "Oops!" }}
			/>
			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
}

const HomeHeader = () => {
	const { width } = useWindowDimensions();

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				width,
				padding: 10,
				alignItems: "center",
			}}
		>
			<Image
				source={{
					uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
				}}
				style={{ width: 30, height: 30, borderRadius: 30 }}
			/>
			<Text
				style={{
					flex: 1,
					textAlign: "center",
					marginLeft: 50,
					fontWeight: "bold",
				}}
			>
				Signal
			</Text>
			<Pressable>
				<Feather
					name="settings"
					size={24}
					color="black"
					style={{ marginHorizontal: 10 }}
				/>
			</Pressable>
			<Pressable>
				<Feather
					name="edit-2"
					size={24}
					color="black"
					style={{ marginHorizontal: 10 }}
				/>
			</Pressable>
		</View>
	);
};

const ChatRoomHeader = ({ children }) => {
	const { width } = useWindowDimensions();

	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				width: Platform.OS === "ios" ? width - 25 : width - 60,
				marginLeft: Platform.OS === "ios" ? 25 : 0,
				padding: 10,
				alignItems: "center",
			}}
		>
			<Image
				source={{
					uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
				}}
				style={{ width: 30, height: 30, borderRadius: 30 }}
			/>
			<Text
				style={{
					flex: 1,
					marginLeft: 10,
					fontWeight: "bold",
				}}
			>
				{children}
			</Text>
			<Pressable>
				<Feather
					name="settings"
					size={24}
					color="black"
					style={{ marginHorizontal: 10 }}
				/>
			</Pressable>
			<Pressable>
				<Feather
					name="edit-2"
					size={24}
					color="black"
					style={{ marginHorizontal: 10 }}
				/>
			</Pressable>
		</View>
	);
};
