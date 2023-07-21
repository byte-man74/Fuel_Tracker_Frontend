import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import api from '../services/api';

const customMapStyle = require('../../assets/maps/configuration.json');
const customMarkerImage = require('../../assets/fuel.png'); // Replace this with the path to your custom marker image

const MapsComponent = () => {
  const [fuelStations, setFuelStations] = useState([]);

  useEffect(() => {
    const get_saved_station = async () => {
      try {
        const response = await api.get('get_nearby_fueling_stations/');
        if (response.status === 200) {
          setFuelStations(response.data.fueling_stations);
        } else {
          console.error('Error: Unexpected response status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    get_saved_station();
  }, []);

  const initialRegion = {
    latitude: 6.4760061,
    longitude: 3.5687743,
    latitudeDelta: 0.02, // Adjust this value for desired zoom level (smaller value = closer zoom)
    longitudeDelta: 0.02, // Adjust this value for desired zoom level (smaller value = closer zoom)
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={customMapStyle}
        initialRegion={initialRegion} // Set the initial region here
      >
        {fuelStations.map((station) => (
          <Marker
            key={station.station.id}
            coordinate={{
              latitude: parseFloat(station.position.latitude),
              longitude: parseFloat(station.position.longitude),
            }}
            image={customMarkerImage} // Set the custom marker image here
          >
            <Callout>
              <View>
                <Text>{station.station.name}</Text>
                <Text>{station.station.address}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapsComponent;
