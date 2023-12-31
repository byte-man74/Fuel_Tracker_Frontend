import api from "../../../../../../../services/api";
import * as Location from "expo-location";
import process_station from "../../../../../../../api/station_images";

export const handleUpvote = async (id) => {
  try {
    await api.get(`add_votes/${id}/`);
  } catch (error) {
    console.error("Error upvoting:", error);
  }
};

export const getCurrentLocation = async (setCurrentLocation) => {
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

// Handles server responses
const handleResponse = (response, setData) => {
  if (response.status === 200) {
      setData(response.data.fueling_stations);
  } else {
    console.error("Error: Unexpected response status:", response.status);
  }
};

// Handles API call errors
const handleError = (error, navigation) => {
  if (!error.response) {
    // Network Error
    navigation.navigate("NoNetwork");
    return;
  }

  if ([500, 502].includes(error.response.status)) {
    // Server Error
    navigation.navigate("ServerScreen");
    return;
  }
};

export const FetchClosestStation = async (
  currentLocation,
  setData,
  setLoading,
  navigation,
  status
) => {
  setLoading(true);

  const location_data = {
    latitude: currentLocation.latitude,
    longitude: currentLocation.longitude,
  }

  try {
    let response;
    if (status === "nearby") {
      response = await api.post("closest_station/", location_data);
    } else {
      response = await api.get("get_nearby_fueling_stations/");
    }

    handleResponse(response, setData);
  } catch (error) {
    handleError(error, navigation);
  } finally {
    setLoading(false);
  }
};


export const processAndSortData = (stationData, priceSort) => {
  if (!stationData) return [];

  const processedData = stationData.map(process_station);

  if (!priceSort) return processedData;

  return processedData.sort((a, b) => a.price - b.price);
};
