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

const { height, width } = Dimensions.get("window");

const SettingsScreen = ({ navigation }) => {
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
          <View style={styles.avatarWithName}>
            <Text style={styles.haaderTitle}>Settings</Text>
          </View>
          <TouchableOpacity style={styles.notificationBox}>
            <Image
              source={require("../../../icons/notifiction_active.png")}
              style={styles.iconStyling}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.mainBox}>
        <View style={styles.homeContainerHeader2}>
                    <View style={styles.avatarWithName}>
                        <Image
                            source={require('../../../images/avatar.png')}
                            style={styles.avatarStyling}
                            resizeMode="contain"
                        />
                        <Text style={styles.haaderTitleVar}>Hello Justice</Text>
                    </View>
                    <TouchableOpacity style={styles.notificationBox}>
                        <Image
                            source={require('../../../icons/edit.png')}
                            style={styles.iconStyling}
                        />
                    </TouchableOpacity>
                </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SettingsScreen;

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
  },
  homeContainerHeader2: {
    width: "100%",
    height: 50,
    top: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  mainBox: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    minHeight: height * 1.23,
    paddingHorizontal: "4%",
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
  averagePriceBox: {
    width: "100%",
    miHeight: 50,
    top: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  averagePriceBoxContainer: {
    width: "70%",
    height: "100%",
  },
  priceText: {
    fontFamily: "MulishBold",
    fontSize: 28,
    color: "#232323",
    letterSpacing: 0.4,
  },
  searchContainer: {
    width: "100%",
    height: 50,
    marginTop: 10,
    marginBottom: 30,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    paddingLeft: "13.2%",
    fontFamily: "Regular",
    fontSize: 16,
    color: "#232323",
  },
  listStationComponentBox: {
    width: "100%",
    minHeight: 450,
    backgroundColor: "red",
  },
  listStationComponent: {
    width: "100%",
    height: 100,
    backgroundColor: "blue",
  },
  itemContainer: {
    width: "100%",
    // Assuming square items, adjust as per your requirements
    marginBottom: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 170,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  carouselContainer: {
    flex: 1,
    width: "100%",
    height: 145,
  },
  nearbyFuelingStationContainer: {
    width: "100%",
    minHeight: 30,
    marginBottom: 40,
  },
  nearbyFuelingStationContainerHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  carouselContainerExtraInfo: {
    width: "100%",
    top: 10,
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  carouselContainerExtraInfoText: {
    minWidth: 50,
    minHeight: 40,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  stationText: {
    fontFamily: "SemiBold",
    fontSize: 15,
    color: "#232323",
  },
  stationLocation: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "#232323",
  },
  bookmarkIconStyling: {
    width: 22,
    height: 22,
  },
  extraFunctionsStyling: {
    width: "100%",
    height: 35,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  upvoteButton: {
    width: 115,
    height: "100%",
    backgroundColor: "#E8E9EE",
    borderRadius: 8,
    paddingHorizontal: 4,
    alignItems: "center",
    flexDirection: "row",
    marginRight: 8,
  },
  trafficIndicator: {
    width: 85,
    height: "100%",
    backgroundColor: "rgba(102, 189, 112, 1)",
    borderRadius: 8,
    paddingHorizontal: 4,
    alignItems: "center",
    flexDirection: "row",
    marginRight: 8,
  },
  lastUpdatedPrice: {
    justifyContent: "flex-end",
    width: "100%",
    height: 35,
  },
});
