import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function DrawerRootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
				<Drawer.Screen name="index"/>
				<Drawer.Screen name="about"/>
			</Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
