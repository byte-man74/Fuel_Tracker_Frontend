import api from "../../../../services/api";

export const get_saved_station = async (setData) => {
  try {
    const response = await api.get("get_nearby_fueling_stations/");
    if (response.status === 200) {
      setData(response.data.fueling_stations);
    } else {
      console.error("Error: Unexpected response status:", response.status);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
  }
};
