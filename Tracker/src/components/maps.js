import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Image } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const customMapStyle = require("../../assets/maps/configuration.json");
const customMarkerImage = require("../../assets/pump.png"); // Replace this with the path to your custom marker image
const myImage = require("../../assets/user_image.png");

const MapsComponent = ({ loading, navigation, data }) => {
  const [initialRegion, setInitialRegion] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleMarkerPress = (region) => {
    // Set the selected marker's region to zoom to
    setSelectedRegion(region);
  };

  useEffect(() => {
    (async () => {
      // Check and request for location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission not granted.");
        return;
      }

      // Get the user's current location
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setInitialRegion({
        latitude,
        longitude,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
      });
    })();
  }, []);

  if (loading === false && initialRegion != null) {
    console.log("loading is false now");
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={customMapStyle}
          initialRegion={initialRegion} // Set the initial region here
          region={selectedRegion}
        >
          {initialRegion && (
            <Marker
              coordinate={initialRegion}
              title="Me"
              description="This is my current location"
            >
              <Image
                source={myImage}
                style={{ width: 70, height: 70 }}
                resizeMethod="resize"
                resizeMode="center"
              />
            </Marker>
          )}
          {data.map((station) => (
            <Marker
              key={station.id}
              coordinate={{
                latitude: parseFloat(station.latitude),
                longitude: parseFloat(station.longitude),
              }}
              onPress={() =>
                handleMarkerPress({
                  latitude: parseFloat(station.latitude),
                  longitude: parseFloat(station.longitude),
                  latitudeDelta: 0.04, // Adjust these values to control the zoom level
                  longitudeDelta: 0.04,
                })
              }
            >
              <Image
                source={customMarkerImage}
                style={{ width: 70, height: 70 }}
                resizeMethod="resize"
                resizeMode="center"
              />
              <Callout>
                <View>
                  <Text>{station.name}</Text>
                  <Text>₦{station.price}/L</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    );
  } else {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapsComponent;
