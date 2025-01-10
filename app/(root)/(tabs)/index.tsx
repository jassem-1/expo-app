import { logout } from "@/lib/appwrite";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      console.log("Logout success");
    } else {
      console.error("Failed to logout");
    }
  };
  return (
    <GestureHandlerRootView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleLogout}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
        <Text className="bg-red-400 ">Home</Text>
        <Text className="text-2xl font-rubik">Test font</Text>
        <Link href="/sign-in">
          <Text>Sign in</Text>
        </Link>
      </View>
    </GestureHandlerRootView>
  );
}
