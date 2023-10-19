import React, { useRef, useEffect, useState } from 'react';
import { Animated, PanResponder, Platform, StyleSheet, View, Dimensions, Keyboard, UIManager } from 'react-native';
import MapsComponent from '../../../components/maps';
import SearchItemComponent from '../../../components/searchItemComponent';
import api from '../../../services/api';
import process_station from '../../../api/station_images';
import * as Location from "expo-location";

const { height } = Dimensions.get('window');

const BOTTOM_SHEET_MAX_HEIGHT = height * 0.95;
const BOTTOM_SHEET_MIN_HEIGHT = height * 0.4;
const MAX_UPWARD_TRANSLATE_Y = BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const SearchScreen = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;

        if (gesture.dy > 0) {
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation('up', 0);
          } else {
            springAnimation('down', 0);
          }
        } else {
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation('down', 0);
          } else {
            springAnimation('up', 0);
          }
        }
      },
    })
  ).current;
  const [fuelStations, setFuelStations] = useState([]);
  const [loading, setLoading] = useState(true)
  const real_data = [];
  const [currentLocation, setCurrentLocation] = useState(null);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setCurrentLocation({ latitude, longitude });
    } catch (error) {
      console.log("Error getting location:", error);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    const get_saved_station = async () => {
      try {
        const response = await api.post("closest_station/", {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        });
        if (response.status === 200) {
          setFuelStations(response.data.fueling_stations);
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

    if (currentLocation) {
      get_saved_station();
    }
  }, [currentLocation]);

  if (fuelStations) {
    
    fuelStations.forEach((station) => {
      const processed_data = process_station(station);
      real_data.push(processed_data);
    });
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleKeyboardDidShow = (event) => {
    const keyboardHeight = event.endCoordinates.height;
    springAnimation('up', keyboardHeight);
  };

  const handleKeyboardDidHide = () => {
    springAnimation('down', 0);
  };

  const springAnimation = (direction, keyboardHeight) => {
    lastGestureDy.current = direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;

    const maxTranslateYWithKeyboard = MAX_UPWARD_TRANSLATE_Y + keyboardHeight;
    const minTranslateYWithKeyboard = MAX_DOWNWARD_TRANSLATE_Y + keyboardHeight;

    if (lastGestureDy.current < maxTranslateYWithKeyboard) {
      lastGestureDy.current = maxTranslateYWithKeyboard;
    } else if (lastGestureDy.current > minTranslateYWithKeyboard) {
      lastGestureDy.current = minTranslateYWithKeyboard;
    }

    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <View style={styles.container}>
      <MapsComponent loading={loading} navigation={navigation} data={real_data} />
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <View style={styles.draggableArea} {...panResponder.panHandlers}>
          <View style={styles.dragHandle} />
        </View>
        <SearchItemComponent data={real_data} loading={loading} navigation={navigation} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: '#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },
});

export default SearchScreen;
