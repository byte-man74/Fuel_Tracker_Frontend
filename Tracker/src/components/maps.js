import React from 'react';
import { View, StyleSheet, Text,  ActivityIndicator  } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout,} from 'react-native-maps';
import Overlay from './overlay';

const customMapStyle = require('../../assets/maps/configuration.json');
const customMarkerImage = require('../../assets/fuel.png'); // Replace this with the path to your custom marker image

const MapsComponent = ({loading, navigation, data}) => {

  const initialRegion = {
    latitude: 6.4760061,
    longitude: 3.5687743,
    latitudeDelta: 0.02, // Adjust this value for desired zoom level (smaller value = closer zoom)
    longitudeDelta: 0.02, // Adjust this value for desired zoom level (smaller value = closer zoom)
  };

  if (loading === false) {
    console.log("loading is false now")
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={customMapStyle}
          initialRegion={initialRegion} // Set the initial region here
        >
          {data.map((station) => (
            <Marker
              key={station.id}
              coordinate={{
                latitude: parseFloat(station.latitude),
                longitude: parseFloat(station.longitude),
              }}
              image={customMarkerImage} // Set the custom marker image here
            >
              <Callout>
                <View>
                  <Text>{station.name}</Text>
                  <Text>{station.amount}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
  else{
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
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

export default MapsComponent;
