import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from 'lottie-react-native';
const { height, width } = Dimensions.get("window");

const NotificationScreen = ({ navigation }) => {
  const fadeInAnimation = useRef(new Animated.Value(0)).current;
  const slideInAnimation = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    const fadeIn = Animated.timing(fadeInAnimation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    });

    const slideIn = Animated.spring(slideInAnimation, {
      toValue: 0,
      speed: 15,
      bounciness: 5,
      useNativeDriver: true,
    });

    Animated.parallel([fadeIn, slideIn]).start();
  }, []);
  return (
    <>
      <View style={styles.headerBox}>
        <View style={styles.homeContainerHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{ width: 30, height: 30 }} source={require('../../icons/back.png')} />
          </TouchableOpacity>
          <View style={styles.avatarWithName}>
            <Text style={styles.haaderTitle}>Notification</Text>
          </View>
          <TouchableOpacity style={styles.notificationBox}>
            <Image
              source={require("../../icons/notifiction_active.png")}
              style={styles.iconStyling}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.mainBox}>
          <LottieView
            source={require('../../images/empty.json')}
            autoPlay
            loop
            style={styles.carouselItemImage}
          />
          <Text style={styles.Text}>
            No new notifications
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  headerBox: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    paddingHorizontal: "4%",
    backgroundColor: "#FFFFFF",
    minHeight: 90,
  },
  homeContainerHeader: {
    width: "100%",
    height: 50,
    top: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  homeContainerHeader2: {
    width: "100%",
    height: 50,
    top: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  carouselItemImage: {
    width: '70%',
    aspectRatio: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  OptionsContainer: {
    width: "100%",
    minHeight: 50,
    marginTop: 45,

  },
  optionBox: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },
  mainBox: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.9,
    paddingHorizontal: "4%",
  },
  Text: {
    fontFamily: 'Regular',
    fontSize: 16,
    color: '#232323',
  },
  avatarWithName: {
    minWidth: "10%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarStyling: {
    width: 40,
    height: 40,
    borderRadius: 200,
    marginRight: 8,
  },
  notificationBox: {
    width: "20%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  haaderTitle: {
    fontFamily: "MulishBold",
    fontSize: 18,
    color: "#232323",
  },
  haaderTitleVar: {
    fontFamily: "SemiBold",
    fontSize: 18,
    color: "#232323",
  },
  headerText: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "#232323",
  },
  headerlink: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "#2F80ED",
  },
  iconStyling: {
    width: 28,
    height: 28,
  },

});
