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
  FlatList,
} from "react-native";
import SkeletonLoader from "../../../components/skeletonui";
import React, { useEffect, useRef, useState } from "react";
import api from "../../../services/api";
import process_station from "../../../api/station_images";
import LottieView from 'lottie-react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get("window");

const SavedScreen = ({ navigation }) => {
  const fadeInAnimation = useRef(new Animated.Value(0)).current;
  const slideInAnimation = useRef(new Animated.Value(100)).current;
  const [stationData, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
 

  const real_data = []
  useEffect(() => {
    const get_saved_station = async () => {
      try {
        const response = await api.get("get_nearby_fueling_stations/");
        if (response.status === 200) {
          setData(response.data.fueling_stations);
        } else {
          console.error("Error: Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    get_saved_station();
  }, []);


  if (stationData) {
    
    stationData.forEach((station) => {
      const processed_data = process_station(station);
      real_data.push(processed_data);
    });
  }

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


  const Content = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("FuelStationDetails", { item: item })}
        style={styles.itemContainer}
      >
        <Image
          source={item.image}
          style={styles.image}
        />
        <View style={styles.carouselContainer}>
          <View style={styles.carouselContainerExtraInfo}>
            <Image
              source={require("../../../../assets/shell.png")}
              style={{
                width: 35,
                height: 35,
                borderRadius: 400,
                marginRight: 7,
              }}
            />
            <View style={styles.carouselContainerExtraInfoText}>
              <Text style={styles.stationText}>{item.name}</Text>
              <Text style={styles.stationLocation}>{item.address}</Text>
            </View>
            <View
              style={{ position: "absolute", top: "19.5%", right: 0 }}
            >
              <Text style={{ fontFamily: "MulishBold", fontSize: 18 }}>
                ₦{item.price}L
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
                  source={require("../../../icons/traffic.png")}
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
                  source={require("../../../icons/upvote.png")}
                  style={{ width: 24, height: 24, marginRight: 5 }}
                />
                <Text style={{ fontFamily: "Regular", fontSize: 14 }}>
                  Upvote price | {item.votes}
                </Text>
              </TouchableOpacity>
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
              {item.time_posted}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  
  const renderItem = ({item}) => {
    return (
      < Content item={item}/>
    )
  }
  
  return (
    <>
      <SafeAreaView  style={styles.headerBox}>
        <View style={styles.homeContainerHeader}>
          <View style={styles.avatarWithName}>
            <Image
              source={require("../../../images/avatar.png")}
              style={styles.avatarStyling}
              resizeMode="contain"
            />
            <Text style={styles.haaderTitle}>Hello👋</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Notification")} style={styles.notificationBox}>
            <Image
              source={require("../../../icons/notifiction_active.png")}
              style={styles.iconStyling}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView >
        <View style={styles.mainBox}>
          <TouchableOpacity
            style={styles.searchContainer}
            onPress={() => navigation.navigate("SearchScreen")}
          >
            <Image
              source={require("../../../icons/search.png")}
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
                source={require("../../../icons/filter.png")}
                style={{ width: 28, height: 28 }}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.nearbyFuelingStationContainer}>
            <View style={styles.nearbyFuelingStationContainerHeader}>
              <Text style={styles.haaderTitle}>Saved fueling stations</Text>
            </View>
            {loading ? (
              <>
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </>
            ) : real_data.length === 0 ? (
              // Show UI for empty data array
              <View style={styles.emptyDataContainer}>
                <LottieView
                  source={require("../../../images/emptypage.json")}
                  autoPlay
                  loop
                  style={styles.carouselItemImage}
                />
                <Text style={styles.emptyDataText}>
                  No fueling station in your location has been registered on our
                  database.
                </Text>
              </View>
            ) : (
              <FlatList
              data={real_data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            )}

          </View>
        </View>
    </>
  );
};


export default SavedScreen;

const styles = StyleSheet.create({
  headerBox: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    minHeight: 70,x
},
homeContainerHeader: {
    width: "100%",
    height: 30,
    flexDirection: 'row',
    paddingHorizontal: "4%",
    justifyContent: 'space-between',
    
},
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  mainBox: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "white",
    paddingBottom: "80%",
    justifyContent: "flex-start",
    minHeight: height * 1.3,
    paddingHorizontal: "4%",
    paddingBottom: "90%"
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
    top: 5,
    height: 50,
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
    flex: 1,
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
    maxWidth: "80%"
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
    width: 145,
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
