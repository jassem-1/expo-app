import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Alert,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { settings } from "@/constants/data";
import { useGlobalContext } from "@/lib/global-provider";
import { logout } from "@/lib/appwrite";
import { Redirect } from "expo-router";

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}
const SettingItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-row items-center justify-between py-3 "
    >
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-6" />
        <Text
          className={`text-base font-rubik-medium text-black-300 ${textStyle}`}
        >
          {title}
        </Text>
      </View>
      {showArrow && (
        <Image source={icons.rightArrow} className="size-5"></Image>
      )}
    </TouchableOpacity>
  );
};

const Profile = () => {
  const { user, refetch } = useGlobalContext();
  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert("Logout successfully !");
      refetch({});
      <Redirect href="/sign-in" />;
    } else {
      Alert.alert("Error occured !");
    }
  };
  return (
    <SafeAreaView className="bg-white flex-1 ">
      <ScrollView className="pb-[80px] px-6">
        <View className="flex flex-row justify-between mt-3 items-center">
          <Text className="text-xl font-rubik-semibold">Profile</Text>
          <Image source={icons.bell} className="size-5"></Image>
        </View>
        <View className="flex flex-row justify-center mt-3 items-center">
          <View className="flex flex-col relative mt-5 items-center">
            <Image
              source={{ uri: user?.avatar }}
              className="size-36 rounded-full "
            />
            <TouchableOpacity>
              <Image
                source={icons.edit}
                className="size-6 absolute -top-7 left-9"
              />
            </TouchableOpacity>
            <Text className="text-lg font-rubik-semibold mt-3">
              {user?.name}
            </Text>
          </View>
        </View>
        <View className="flex flex-col mt-5">
          <SettingItem
            icon={icons.calendar}
            title="My Bookings"
            onPress={() => {}}
          />
          <SettingItem
            icon={icons.calendar}
            title="Payments"
            onPress={() => {}}
          />
        </View>
        <View className="flex flex-col mt-5  border-t pt-5 border-primary-200">
          {settings.slice(2).map((setting, index) => (
            <SettingItem key={index} {...setting} />
          ))}
        </View>
        <View className="flex flex-col mt-5  border-t pt-5 border-primary-200">
          <SettingItem
            icon={icons.logout}
            title="Logout"
            showArrow={false}
            textStyle="text-danger"
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
