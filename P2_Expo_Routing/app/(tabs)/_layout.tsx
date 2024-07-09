import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function TabRootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="contact_us"
        options={{
          title: "Contact Us",
          tabBarIcon: ({ color }) => <Feather size={28} name="phone" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <View style={styles.icons}>
              <FontAwesome size={28} name="home" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 30, height: 30, borderRadius: 30 / 2 }}
              source={{
                uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icons: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "red",
    bottom: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});
