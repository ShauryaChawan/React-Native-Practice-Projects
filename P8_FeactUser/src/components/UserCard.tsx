import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { UserReqres } from "../types/User2.0";

interface UserCardProps {
  user: UserReqres;
  onPress: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(user.id)}>
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{
            // uri: "https://reqres.in/img/faces/2-image.jpg",
            uri: user.avatar,
          }}
        />
        <Text style={styles.name}>First Name: {user.first_name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  img: {
    height: 100,
    width: 100,
  },
});

export default UserCard;
