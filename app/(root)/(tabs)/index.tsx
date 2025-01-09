import { Link } from "expo-router";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="bg-red-400 ">Home</Text>
        <Text className="text-2xl font-rubik">Test font</Text>
        <Link href="/sign-in">
          <Text>Sign in</Text>
        </Link>
      </View>
    </GestureHandlerRootView>
  );
}
