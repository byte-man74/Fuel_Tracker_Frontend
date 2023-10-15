import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { processAndSortData } from "./helper_functions/currentStation";
import { styles } from "./styles";
import { MainComponent } from "./renderedItem";
import { handleUpvote } from "./helper_functions/currentStation";
import { getCurrentLocation } from "./helper_functions/currentStation";
import { TrafficIndicator, UpvoteButton } from "./supportComponent";
import { FetchClosestStation } from "./helper_functions/currentStation";


const StationSlider = ({ navigation, refresh, priceSort }) => {
  const [stationData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const default_logo = require("../../../../../../../assets/shell.png");
  const [currentLocation, setCurrentLocation] = useState(null);


  useEffect(() => {
    getCurrentLocation(setCurrentLocation);
  }, []);

  useEffect(() => {
    if (currentLocation) {
      FetchClosestStation(currentLocation, setData, setLoading, navigation);
    }
  }, [currentLocation, refresh]);

  const sortedData = processAndSortData(stationData, priceSort);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("FuelStationDetails", { item })}
        style={styles.itemContainer}
      >
        <Image source={item.image} style={styles.image} />
        <View style={styles.carouselContainer}>
          <View style={styles.carouselContainerExtraInfo}>
            <Image source={default_logo} style={styles.defaultLogo} />
            <View style={styles.carouselContainerExtraInfoText}>
              <Text style={styles.stationText}>{item.name}</Text>
              <Text style={styles.stationLocation}>{item.address}</Text>
            </View>
            <View style={{ position: "absolute", top: "19.5%", right: 0 }}>
              <Text style={styles.priceText}>₦{item.price}/L</Text>
            </View>
          </View>
          <View style={styles.extraFunctionsStyling}>
            <View style={{ width: "100%", height: "100%", flexDirection: "row", alignItems: "center" }}>
              <TrafficIndicator traffic={item.traffic} />
              <UpvoteButton votes={item.votes} onUpvote={() => handleUpvote(item.id)} />
            </View>
          </View>
          <View style={styles.lastUpdatedPrice}>
            <Text style={{ fontFamily: "Regular", fontSize: 14, width: "97.5%", color: "#333333" }}>
              Last updated{item.time_posted}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  return <MainComponent loading={loading} sortedData={sortedData} renderItem={renderItem} />
};



export default StationSlider;
