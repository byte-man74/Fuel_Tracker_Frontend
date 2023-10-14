import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Animated,
  RefreshControl,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import StationSlider from "../../../../components/CurrentStationSlider";
import SliderSaved from "../../../../components/verticalSlider";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../../components/GlobalComponents/button";
import { styles } from "./styles/homeStyles";
import simulateApiCall from "./helper_functions/main";
import animate from "./helper_functions/useAnimation";
import ModalContainer from "../../../../components/GlobalComponents/modal";
import { Avatar } from "./components/avatar";
import { NotificationIcon } from "./components/notification";
import { AveragePrice } from "./components/averagePrice";
import { SearchBox } from "./components/search";



const HomeScreen = ({ navigation }) => {
  const fadeInAnimation = useRef(new Animated.Value(0)).current;
  const slideInAnimation = useRef(new Animated.Value(100)).current;
  const [Modal, setModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [priceSort, setPriceSort] = useState(true);

  useEffect(() => {
    animate(fadeInAnimation, slideInAnimation);
  }, []);

  const onRefresh = () => {
    simulateApiCall(setRefreshing);
  };

  return (
    <>
      {Modal ? (
        <ModalContainer setModal={setModal}>
          <View
            style={{
              width: "70%",
              height: 200,
              backgroundColor: "white",
              borderRadius: 12,
              padding: 14,
              gap: 20,
            }}
          >
            <Text style={{ fontSize: 16 }}>Filter Station</Text>
            <View
              style={{
                padding: 14,
                gap: 15,
              }}
            >
              <Button
                title="By price"
                width="100%"
                height={50}
                color={priceSort ? "black" : "#eeeeee"} // Custom color
                textColor={priceSort ? "white" : "black"}
                onPress={() => setPriceSort(true)}
              />
              <Button
                title="By distance"
                width="100%"
                height={50}
                color={priceSort ? "#eeeeee" : "black"} // Custom color
                textColor={priceSort ? "black" : "white"}
                onPress={() => setPriceSort(false)}
              />
            </View>
          </View>
        </ModalContainer>
      ) : (
        <></>
      )}

      <SafeAreaView style={styles.headerBox}>
        <View style={styles.homeContainerHeader}>
          <Avatar />
          <NotificationIcon navigation={navigation} />
        </View>
      </SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="orange" 
            title="Refreshing..." 
            titleColor="orange" 
          />
        }
      >
        <View style={styles.mainBox}>
          <AveragePrice />
          <SearchBox navigation={navigation} setModal={setModal} />
          <View style={styles.nearbyFuelingStationContainer}>
            <Animated.View
              style={[
                styles.nearbyFuelingStationContainerHeader,
                { transform: [{ translateY: slideInAnimation }] },
              ]}
            >
              <Text style={styles.haaderTitle}>Fueling stations near you</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("SearchScreen")}
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
          <View
            style={{ ...styles.nearbyFuelingStationContainer, marginBottom: 0 }}
          >
            <View style={styles.nearbyFuelingStationContainerHeader}>
              <Text style={styles.haaderTitle}>Saved fueling stations</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Saved")}>
                <Text style={styles.headerText}>view all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.carouselBox}>
              <SliderSaved navigation={navigation} />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
