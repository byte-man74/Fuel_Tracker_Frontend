import { View, Text, Animated, TouchableOpacity } from "react-native";
import StationSlider from "./slider/CurrentStationSlider";
import { styles } from "../styles/homeStyles";

export const FuelingStationsSection = ({ navigation, slideInAnimation, fadeInAnimation, refreshing, priceSort, status }) => (
    <View style={styles.nearbyFuelingStationContainer}>
      <Animated.View
        style={[
          styles.nearbyFuelingStationContainerHeader,
          { transform: [{ translateY: slideInAnimation }] },
        ]}
      >
        <Text style={styles.haaderTitle}>{ status === "nearby" ? "Fueling stations near you" : "Hello" }</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchScreen')}
        >
          <Text style={styles.headerText}>view all</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[styles.carouselBox, { opacity: fadeInAnimation }]}
      >
        <StationSlider
          navigation={navigation}
          refresh={refreshing}
          priceSort={priceSort}
        />
      </Animated.View>
    </View>
  );
  