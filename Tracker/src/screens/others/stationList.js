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
  
  const StationList = ({ navigation }) => {
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
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.avatarWithName}>
              <Image
                source={require("../../icons/back.png")}
                style={styles.avatarStyling}
                resizeMode="contain"
              />
              <Text style={styles.haaderTitle}>Fuel Station Nearby</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={styles.notificationBox}>
              <Image
                source={require("../../icons/notifiction_active.png")}
                style={styles.iconStyling}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.mainBox}>
            <TouchableOpacity
              style={styles.searchContainer}
              onPress={() => navigation.navigate("SearchScreen")}
            >
              <Image
                source={require("../../icons/search.png")}
                style={{
                  width: 28,
                  height: 28,
                  position: "absolute",
                  top: "22.5%",
                  left: "3%",
                }}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                onFocus={() => navigation.navigate("SearchScreen")}
              ></TextInput>
              <TouchableOpacity
                style={{ position: "absolute", top: "22.5%", right: "3%" }}
                onPress={() => navigation.navigate("SearchScreen")}
              >
                <Image
                  source={require("../../icons/filter.png")}
                  style={{ width: 28, height: 28 }}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.nearbyFuelingStationContainer}>
              <View style={styles.nearbyFuelingStationContainerHeader}>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("FuelStationDetails")}
                style={styles.itemContainer}
              >
                <Image
                  source={require("../../../assets/image1.jpg")}
                  style={styles.image}
                />
                <View style={styles.carouselContainer}>
                  <View style={styles.carouselContainerExtraInfo}>
                    <Image
                      source={require("../../../assets/shell.jpg")}
                      style={{
                        width: 35,
                        height: 35,
                        borderRadius: 400,
                        marginRight: 7,
                      }}
                    />
                    <View style={styles.carouselContainerExtraInfoText}>
                      <Text style={styles.stationText}>Shell</Text>
                      <Text style={styles.stationLocation}>Carwash</Text>
                    </View>
                    <View
                      style={{ position: "absolute", top: "19.5%", right: 0 }}
                    >
                      <Text style={{ fontFamily: "MulishBold", fontSize: 18 }}>
                        ₦540
                      </Text>
                    </View>
                  </View>
                  <View style={styles.extraFunctionsStyling}>
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View style={styles.trafficIndicator}>
                        <Image
                          source={require("../../icons/traffic.png")}
                          style={{ width: 24, height: 24, marginRight: 5 }}
                        />
                        <Text
                          style={{
                            fontFamily: "Regular",
                            fontSize: 14,
                            color: "white",
                          }}
                        >
                          Traffic
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.upvoteButton}>
                        <Image
                          source={require("../../icons/upvote.png")}
                          style={{ width: 24, height: 24, marginRight: 5 }}
                        />
                        <Text style={{ fontFamily: "Regular", fontSize: 14 }}>
                          Upvote | 24
                        </Text>
                      </TouchableOpacity>
                      <Image
                        source={require("../../icons/share.png")}
                        style={{
                          width: 43.95,
                          height: "90%",
                          marginRight: 5,
                          objectFit: "contain",
                        }}
                      />
                    </View>
                  </View>
                  <View style={styles.lastUpdatedPrice}>
                    <Text
                      style={{
                        fontFamily: "Regular",
                        fontSize: 16,
                        color: "#333333",
                      }}
                    >
                      Last updated 30mins ago{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("FuelStationDetails")}
                style={styles.itemContainer}
              >
                <Image
                  source={require("../../../assets/image1.jpg")}
                  style={styles.image}
                />
                <View style={styles.carouselContainer}>
                  <View style={styles.carouselContainerExtraInfo}>
                    <Image
                      source={require("../../../assets/shell.jpg")}
                      style={{
                        width: 35,
                        height: 35,
                        borderRadius: 400,
                        marginRight: 7,
                      }}
                    />
                    <View style={styles.carouselContainerExtraInfoText}>
                      <Text style={styles.stationText}>Shell</Text>
                      <Text style={styles.stationLocation}>Carwash</Text>
                    </View>
                    <View
                      style={{ position: "absolute", top: "19.5%", right: 0 }}
                    >
                      <Text style={{ fontFamily: "MulishBold", fontSize: 18 }}>
                        ₦540
                      </Text>
                    </View>
                  </View>
                  <View style={styles.extraFunctionsStyling}>
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View style={styles.trafficIndicator}>
                        <Image
                          source={require("../../icons/traffic.png")}
                          style={{ width: 24, height: 24, marginRight: 5 }}
                        />
                        <Text
                          style={{
                            fontFamily: "Regular",
                            fontSize: 14,
                            color: "white",
                          }}
                        >
                          Traffic
                        </Text>
                      </View>
                      <TouchableOpacity style={styles.upvoteButton}>
                        <Image
                          source={require("../../icons/upvote.png")}
                          style={{ width: 24, height: 24, marginRight: 5 }}
                        />
                        <Text style={{ fontFamily: "Regular", fontSize: 14 }}>
                          Upvote | 24
                        </Text>
                      </TouchableOpacity>
                      <Image
                        source={require("../../icons/share.png")}
                        style={{
                          width: 43.95,
                          height: "90%",
                          marginRight: 5,
                          objectFit: "contain",
                        }}
                      />
                    </View>
                  </View>
                  <View style={styles.lastUpdatedPrice}>
                    <Text
                      style={{
                        fontFamily: "Regular",
                        fontSize: 16,
                        color: "#333333",
                      }}
                    >
                      Last updated 30mins ago{" "}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </>
    );
  };
  
  export default StationList;
  
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
      top: 35,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    container: {
      flexGrow: 1,
      backgroundColor: "white",
    },
    mainBox: {
      top: 10,
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
      width:30,
      height: 30,
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
  