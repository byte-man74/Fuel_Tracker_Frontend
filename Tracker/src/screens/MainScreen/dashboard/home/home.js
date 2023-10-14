import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Animated,
  RefreshControl,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import StationSlider from "../../../../components/CurrentStationSlider";
import process_station from "../../../../api/station_images";
import SliderSaved from "../../../../components/verticalSlider";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../../components/GlobalComponents/button";
import { styles } from "./styles/homeStyles";
const { height } = Dimensions.get("window");
import simulateApiCall from "./helper_functions/main";
import animate from "./helper_functions/useAnimation";


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
        <TouchableOpacity
          style={{
            width: "100%",
            height: height,
            backgroundColor: "rgba(0, 0, 0, 0.49)",
            position: "absolute",
            top: 0,
            justifyContent: "center",
            alignItems: "center",
            right: 0,
            zIndex: 100,
          }}
          onPress={() => {
            setModal(false);
          }}
        >
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
                color={priceSort ? "#eeeeee" :  "black"} // Custom color
                textColor={priceSort ? "black" : "white"}
                onPress={() => setPriceSort(false)}
              />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <SafeAreaView style={styles.headerBox}>
        <View style={styles.homeContainerHeader}>
          <View style={styles.avatarWithName}>
            <Image
              source={require("../../../../images/avatar.png")}
              style={styles.avatarStyling}
              resizeMode="contain"
            />
            <Text style={styles.haaderTitle}>Hello👋</Text>
          </View>
          <TouchableOpacity
            style={styles.notificationBox}
            onPress={() => navigation.navigate("Notification")}
          >
            <Image
              source={require("../../../../icons/notifiction_active.png")}
              style={styles.iconStyling}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="orange" // Customize the loading spinner color
            title="Refreshing..." // Displayed when refreshing
            titleColor="orange" // Customize the loading text color
          />
        }
      >
        <View style={styles.mainBox}>
          <View style={styles.averagePriceBox}>
            <View style={styles.averagePriceBoxContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.priceText}>₦---</Text>
                <Image
                  style={{ width: 24, height: 24, marginLeft: 2 }}
                  source={require("../../../../icons/gas.png")}
                />
              </View>
              <Text style={styles.headerText}>Average fuel price near you</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.searchContainer}
            onPress={() => navigation.navigate("SearchScreen")}
          >
            <Image
              source={require("../../../../icons/search.png")}
              style={{
                width: 28,
                height: 28,
                position: "absolute",
                top: "22.5%",
                left: "3%",
              }}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              onFocus={() => navigation.navigate("SearchScreen")}
            ></TextInput>
            <TouchableOpacity
              style={{ position: "absolute", top: "22.5%", right: "3%" }} //!here
              onPress={() => setModal(true)}
            >
              <Image
                source={require("../../../../icons/filter.png")}
                style={{ width: 28, height: 28 }}
              />
            </TouchableOpacity>
          </TouchableOpacity>
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

