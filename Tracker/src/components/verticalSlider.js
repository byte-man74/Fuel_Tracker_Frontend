import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import api from "../services/api";
import process_station from "../api/station_images";
import LottieView from "lottie-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import SkeletonItem from "../screens/MainScreen/dashboard/home/components/Skeleton";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.68;

const SliderSaved = ({ navigation }) => {
  const [stationData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const default_logo = require("../../assets/shell.png");
  const real_data = [];

  useEffect(() => {
    const get_saved_station = async () => {
      // ... (Previous code)

      // Initialize the upvote states array with the same length as stationData
      const initialUpvoteStates = new Array(stationData.length).fill(false);
      setUpvoteStates(initialUpvoteStates);
    };

    get_saved_station();
  }, []);

  const handleUpvote = async (item) => {
    
    try {
      // Update the upvote status for the item at the specified index
   
      item.active = !item.active;
      await api.get(`add_votes/${item.id}/`);
    } catch (error) {
      console.error(item)
      console.error("Error upvoting:", error);
    }
  };


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
        if (!error.response) {
          // No Internet Connection Error
          navigation.navigate("NoNetwork");
          return;
        }

        if (error.response.status === 500 || error.response.status === 502) {
          // Server Error
          navigation.navigate("ServerScreen");
          return;
        }
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

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("FuelStationDetails", { item: item, index: index })
        }
        style={styles.itemContainer}
      >
        <Image source={item.image} style={styles.image} />
        <View style={styles.carouselContainer}>
          <View style={styles.carouselContainerExtraInfo}>
            <Image
              source={default_logo}
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
            <View style={{ position: "absolute", top: "19.5%", right: 0 }}>
              <Text style={{ fontFamily: "MulishBold", fontSize: 18 }}>
                ₦{item.price}/L
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
              <View
                style={[
                  styles.trafficIndicator,
                  item.traffic === 1
                    ? { backgroundColor: "#DF1525" } // Apply red background if traffic is 1
                    : item.traffic === 2
                    ? { backgroundColor: "#F3E461" } // Apply yellow background if traffic is 2
                    : { backgroundColor: "#66BD70" }, // Apply #66BD70 background if traffic is 3
                ]}
              >
                <Image
                  source={require("../icons/traffic.png")}
                  style={{
                    width: "30%",
                    height: "65%",
                    objectFit: "contain",
                    marginRight: 5,
                  }}
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
              <View
                style={[
                  styles.upvoteButton,
                ]}
              >
                <Text style={{ fontFamily: "Regular", fontSize: RFValue(12) }}>
                  {item.votes} user(s) agreed on price 👍🏾
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.lastUpdatedPrice}>
            <Text
              style={{
                fontFamily: "Regular",
                fontSize: RFValue(12),
                width: "97.5%",
                color: "#333333",
              }}
            >
              {item.time_posted}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.sliderContainer}>
      {loading ? (
        <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <SkeletonItem containerWidth={ITEM_WIDTH} />}
        keyExtractor={(item) => item.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainer}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
      />
      ) : real_data.length === 0 ? (
        // Show UI for empty data array
        <View style={styles.emptyDataContainer}>
          <LottieView
            source={require("../images/emptypage.json")}
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
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContentContainer}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    width: "100%",
    // Assuming square items, adjust as per your requirements
  },
  flatListContentContainer: {},
  imageSkeleton: {
    width: "100%",
    height: 210,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#66666610",
    paddingHorizontal: "7%",
  },
  stationTextSkeleton: {
    width: "40%",
    height: 14,
    backgroundColor: "#66666610",
    borderRadius: 4,
  },
  upvotedButton: {
    backgroundColor: "#F5A855", // Change the color to your desired upvoted state color
  },
  stationLocationSkeleton: {
    width: "80%",
    height: 14,
    backgroundColor: "#66666610",
    borderRadius: 4,
  },
  priceSkeleton: {
    width: 40,
    height: 20,
    backgroundColor: "#66666610",
    borderRadius: 4,
  },
  logoSkeleton: {
    width: 35,
    height: 35,
    borderRadius: 400,
    marginRight: 7,
    backgroundColor: "#66666610",
  },
  extraFunctionsStylingSkeleton: {
    width: "100%",
    height: 35,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#66666610",
    borderRadius: 4,
  },
  trafficIndicatorSkeleton: {
    width: 85,
    height: "100%",
    backgroundColor: "#66666610",
    borderRadius: 4,
  },
  upvoteButtonSkeleton: {
    width: 150,
    height: "100%",
    backgroundColor: "#66666610",
    borderRadius: 4,
  },
  lastUpdatedPriceSkeleton: {
    justifyContent: "flex-end",
    width: "100%",
    height: 35,
    backgroundColor: "#66666610",
    borderRadius: 4,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    // Assuming square items, adjust as per your requirements
    minHeight: 330,
    marginRight: 20,
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
    fontSize: RFValue(16),
    fontWeight: "bold",
    color: "white",
  },
  carouselContainer: {
    flex: 1,
    width: "100%",
    height: 145,
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
    fontSize: RFValue(14),
    color: "#232323",
    width: "70%",
  },
  stationLocation: {
    fontFamily: "Regular",
    fontSize: RFValue(12),
    color: "#232323",
    marginTop: 4,
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
    minWidth: 120,
    height: "100%",
    backgroundColor: "#E8E9EE",
    borderRadius: 8,
    paddingHorizontal: 4,
    alignItems: "center",
    flexDirection: "row",
    marginRight: 8,
  },
  bigContainer: {
    width: 70,
    height: 40,
    backgroundColor: "#DF1525",
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
  emptyDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "#F4F4F4",
  },
  emptyDataText: {
    fontSize: 16,
    fontFamily: "Regular",
    color: "#666666",
    textAlign: "center",
  },
  carouselItemImage: {
    width: "70%",
    aspectRatio: 1,
  },
  load: {
    width: 300,
    objectFit: "contain",
  },
});

export default SliderSaved;
