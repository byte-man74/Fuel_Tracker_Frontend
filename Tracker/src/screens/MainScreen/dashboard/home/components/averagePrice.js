import { View, Text, Image } from "react-native";
import { styles } from "../styles/homeStyles";
import { useState, useEffect } from "react";
import api from "../../../../../services/api";
import { ActivityIndicator } from "react-native";

export const AveragePrice = ({refreshing}) => {
  const [price, setPrice] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const get_avg_price = async () => {
      try {
        const response = await api.get("get_average_price");
        console.log(response.data);
        if (response.status === 200) {
          
          setPrice(response.data.avg_amount.toFixed(1));
        } else {
          console.error("Error: Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false);
      }
    };

    get_avg_price();
  }, [refreshing]);

  return (
    <View style={styles.averagePriceBox}>
      <View style={styles.averagePriceBoxContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {isLoading ? (
            <ActivityIndicator size="small" color="rgba(245, 168, 85, 1)" />
          ) : (
            <Text style={styles.priceText}>
              ₦{price == null ? "---" : price}
            </Text>
          )}
          <Image
            style={{ width: 24, height: 24, marginLeft: 2 }}
            source={require("../../../../../icons/gas.png")}
          />
        </View>
        <Text style={styles.headerText}>Average fuel price near you</Text>
      </View>
    </View>
  );
};
