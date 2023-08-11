import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, Alert } from 'react-native';
import MapView, {  PROVIDER_GOOGLE, Marker, Callout, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';

const customMapStyle = require('../../assets/maps/configuration.json');
const customMarkerImage = require('../../assets/pump.png'); // Replace this with the path to your custom marker image
const myImage = require('../../assets/user_image.png');

const DirectionComponent = ({ navigation, data }) => {
  const [initialRegion, setInitialRegion] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    (async () => {
      // Check and request for location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Location permission not granted.');
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

      // Get the route between the user's location and the fueling station
      getRouteCoordinates(latitude, longitude, data.latitude, data.longitude);
    })();
  }, []);

  // Function to fetch route coordinates from the Google Maps Directions API
  const getRouteCoordinates = async (originLatitude, originLongitude, destinationLatitude, destinationLongitude) => {
    try {
      const apiKey = 'AIzaSyCnIx1hokAk81uKGBM0d_S1GAqWpytvpOk';
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${originLatitude},${originLongitude}&destination=${destinationLatitude},${destinationLongitude}&key=${apiKey}`
      );
      const data = await response.json();
  
      if (response.ok && data.status === 'OK') {
        if (data.routes && data.routes.length > 0) {
          // Extract the route coordinates from the API response
          const polylinePoints = data.routes[0].overview_polyline.points;
          const decodedPoints = decodePolyline(polylinePoints);
          setRouteCoordinates(decodedPoints);
        } else {
          Alert.alert('Error', 'No route found between the locations. Please try different locations.');
        }
      } else {
        Alert.alert('Error', `Failed to fetch route. Status: ${data.status}`);
      }
    } catch (error) {
      console.error('Error fetching route:', error);
      Alert.alert('Error', 'An error occurred while fetching route. Please try again later.');
    }
  };

  // Function to decode the polyline points from the API response
  const decodePolyline = (t, e = 5) => {
    for (var o, n = t.length, l = [], r = 0, h = 0, i = 0; r < n; ) {
      var a,
        u = 0,
        c = 0;
      do {
        (a = t.charCodeAt(r++) - 63), (c |= (31 & a) << u), (u += 5);
      } while (a >= 32);
      (o = 1 & c ? ~(c >> 1) : c >> 1), (u = c = 0);
      do {
        (a = t.charCodeAt(r++) - 63), (c |= (31 & a) << u), (u += 5);
      } while (a >= 32);
      (a = 1 & c ? ~(c >> 1) : c >> 1), (h += o), (i += a), l.push([h * Math.pow(10, -e), i * Math.pow(10, -e)]);
    }
    return (l = l.map((t) => ({ latitude: t[0], longitude: t[1] })));
  };

  if (initialRegion != null) {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} customMapStyle={customMapStyle} initialRegion={initialRegion}>
          {routeCoordinates.length > 0 && (
            <Polyline
              coordinates={routeCoordinates}
              strokeWidth={4}
              strokeColor="orange"
              lineDashPattern={[5, 5]}
              geodesic
            />
          )}
          {initialRegion && (
            <Marker coordinate={initialRegion} title="Me" description="This is my current location" image={myImage} />
          )}
          <Marker
            key={data.id}
            coordinate={{
              latitude: parseFloat(data.latitude),
              longitude: parseFloat(data.longitude),
            }}
            image={customMarkerImage}
          >
            <Callout>
              <View>
                <Text>{data.name}</Text>
                <Text>₦{data.price}/L</Text>
              </View>
            </Callout>
          </Marker>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DirectionComponent;
