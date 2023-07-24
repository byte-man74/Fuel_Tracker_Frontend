import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import LottieView from 'lottie-react-native';


const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.68;

const Slider = ({ navigation, loading, data }) => {

  const default_logo = require("../../assets/shell.jpg")
  
 


  
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("FuelStationDetails", { item: item })}
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
              ? { backgroundColor: "red" }     // Apply red background if traffic is 1
              : item.traffic === 2
              ? { backgroundColor: "yellow" }  // Apply yellow background if traffic is 2
              : { backgroundColor: "green" }   // Apply green background if traffic is 3
          ]}
        >
          <Image
            source={require("../icons/traffic.png")}
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
                  source={require("../icons/upvote.png")}
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
              style={{ fontFamily: "Regular", fontSize: 16, width: "97.5%", color: "#333333" }}
            >
              Last updated {item.time_posted}
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
            data={[1, 2, 3, 4, 5]} // Set an array of any length here for skeleton placeholders
            renderItem={() => (
              <View style={styles.itemContainer}>
                {/* Placeholder for your skeleton UI */}
                <View style={styles.imageSkeleton} />
                <View style={styles.carouselContainer}>
                  <View style={styles.carouselContainerExtraInfo}>
                    <View style={styles.logoSkeleton} />
                    <View style={styles.carouselContainerExtraInfoText}>
                      <View style={styles.stationTextSkeleton} />
                      <View style={styles.stationLocationSkeleton} />
                    </View>
                    <View style={styles.priceSkeleton} />
                  </View>
                  <View style={styles.extraFunctionsStylingSkeleton}>
                    <View style={styles.trafficIndicatorSkeleton} />
                    <View style={styles.upvoteButtonSkeleton} />
                  </View>
                  <View style={styles.lastUpdatedPriceSkeleton} />
                </View>
              </View>
            )}
            keyExtractor={(item) => item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContentContainer}
            snapToInterval={ITEM_WIDTH}
            decelerationRate="fast"
          />
      ) : data == null ? (
        // Show UI for empty data array
        <View style={styles.emptyDataContainer}>
          <LottieView
            source={require('../images/emptypage.json')}
            autoPlay
            loop
            style={styles.carouselItemImage}
          />
          <Text style={styles.emptyDataText}>No data available.</Text>
        </View>
      ) : (
        // Show data items if data array is not empty
        <FlatList
          data={data}
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
    height: 170,
    borderRadius: 8,
    backgroundColor: "#E0E0E0",
  },
  carouselContainer: {
    flex: 1,
    width: "100%",
    minHeight: 145,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    marginTop: 10,
    
  },
  carouselContainerExtraInfo: {
    width: "100%",
    top: 10,
    minHeight: 60,
    
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
  carouselContainerExtraInfoText: {
    minWidth: 50,
    minHeight: 140,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    
  },
  stationTextSkeleton: {
    width: "40%",
    height: 14,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
  stationLocationSkeleton: {
    width: "80%",
    height: 14,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
  priceSkeleton: {
    width: 40,
    height: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
  logoSkeleton: {
    width: 35,
    height: 35,
    borderRadius: 400,
    marginRight: 7,
    backgroundColor: "#E0E0E0",
  },
  extraFunctionsStylingSkeleton: {
    width: "100%",
    height: 35,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
  trafficIndicatorSkeleton: {
    width: 85,
    height: "100%",
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
  upvoteButtonSkeleton: {
    width: 150,
    height: "100%",
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
  },
  lastUpdatedPriceSkeleton: {
    justifyContent: "flex-end",
    width: "100%",
    height: 35,
    backgroundColor: "#E0E0E0",
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
    fontSize: 16,
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
    fontSize: 15,
    color: "#232323",
    width: "90%"
  },
  stationLocation: {
    fontFamily: "Regular",
    fontSize: 14,
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
    width: 150,
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
    backgroundColor: 'red'
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
    backgroundColor: "#F4F4F4"
  },
  emptyDataText: {
    fontSize: 16,
    fontFamily: "Regular",
    color: "#666666",
  },
  carouselItemImage: {
    width: '70%',
    aspectRatio: 1,
  },
});

export default Slider;


