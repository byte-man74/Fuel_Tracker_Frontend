import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Button from "./GlobalComponents/button";
const { height, width } = Dimensions.get("window");
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogoutModal = ({ setModal, navigation }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("userAccessToken");
    navigation.reset({
      index: 0,
      routes: [{ name: "Authentication" }],
    });
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.loading}>
        <Text style={styles.warning}>Are you sure you want to logout?</Text>
        <View style={styles.ctaContainer}>
          <Button
            title="Logout"
            onPress={handleLogout} // Only call handleSubmit when the button is not disabled
            disabled={false}
            color={"#1E1E1E"} // Custom color
            textColor={"white"}
            width={"100%"}
            // Custom width
            height={55}
          />
          <Button
            title="Cancel"
            onPress={() => {
              setModal(false);
            }} // Only call handleSubmit when the button is not disabled
            disabled={false}
            color={"#eeeeee"} // Custom color
            textColor={"black"}
            width={"100%"}
            // Custom width
            height={55}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    zIndex: 200,
    backgroundColor: "rgba(51, 51, 51, 0.54)",
  },
  warning: {
    fontFamily: "Regular",
    fontSize: 16,
  },
  loading: {
    width: "80%",
    height: 200,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
  },
  ctaContainer: {
    minHeight: 135,
    width: "70%",
    marginTop: 20,
    justifyContent: "space-around",
  },
});

export default LogoutModal;
