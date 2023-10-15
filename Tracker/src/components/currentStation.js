import api from "../services/api";
import * as Location from "expo-location";


export const handleUpvote = async (id) => {
  try {
    await api.get(`add_votes/${id}/`);
  } catch (error) {
    console.error("Error upvoting:", error);
  }
};

export const getCurrentLocation = async ( setCurrentLocation) => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Location permission denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    setCurrentLocation({ latitude, longitude });
  } catch (error) {
    console.log("Error getting location:", error);
  }
};
