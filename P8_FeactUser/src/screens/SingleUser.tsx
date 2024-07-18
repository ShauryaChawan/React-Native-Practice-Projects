import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import axios from "axios";
import { UserReqres } from "../types/User2.0";

type RootStackParamList = {
  SingleUser: { userId: number };
};

type SingleUserScreenRouteProp = RouteProp<RootStackParamList, "SingleUser">;

const SingleUser: React.FC = () => {
  const [user, setUser] = useState<UserReqres | null>(null);
  const route = useRoute<SingleUserScreenRouteProp>();
  const { userId } = route.params;

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${userId}`);
      console.log("Inside Single user");
      setUser(response.data.data);
      console.log(response.data.data.avatar)
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{
            uri: user.avatar,
          }}
        />
        <Text>First Name: {user.first_name}</Text>
        <Text>Last Name: {user.last_name}</Text>
        <Text>Email: {user.email}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
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
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  img: {
    height: 100,
    width: 100
  },
});

export default SingleUser;
