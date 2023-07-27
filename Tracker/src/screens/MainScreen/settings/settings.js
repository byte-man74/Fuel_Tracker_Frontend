import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Overlay from "../../../components/overlay";
const { height, width } = Dimensions.get("window");
import LogoutModal from "../../../components/logoutmodal";
import { ActivityIndicator } from "react-native";
import api from "../../../services/api";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = ({ navigation }) => {
  const fadeInAnimation = useRef(new Animated.Value(0)).current;
  const slideInAnimation = useRef(new Animated.Value(100)).current;
  const [openModal, setModal] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const get_email = async () => {
      try {
        const response = await api.get("get_email/");
        if (response.status === 200) {
          setEmail(response.data.email);
        } else {
          console.error("Error: Unexpected response status:", response.status);
        }
      } catch (error) {
        console.error(error)
        if (!error.response) {
          // No Internet Connection Error
          
          navigation.navigate('NoNetwork');
          return;
        }
    
        if (error.response.status === 500 || error.response.status === 502 ) {
          // Server Error
          navigation.navigate('ServerScreen');
          return;
        }
      } finally {
        setLoading(false);
      }
    };

    get_email();
  }, []);

  useEffect(() => {
    const fadeIn = Animated.timing(fadeInAnimation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    });

    const slideIn = Animated.spring(slideInAnimation, {
      toValue: 0,
      speed: 15,
      bounciness: 5,
      useNativeDriver: true,
    });

    Animated.parallel([fadeIn, slideIn]).start();
  }, []);
  return (
    <>
    { openModal ? (
        <LogoutModal navigation={navigation} setModal={setModal} />
    ) : (
      <></>
    )}
      <SafeAreaView style={styles.headerBox}>
        <View style={styles.homeContainerHeader}>
          <View style={styles.avatarWithName}>
            <Text style={styles.haaderTitle}>Settings</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={styles.notificationBox}>
            <Image
              source={require("../../../icons/notifiction_active.png")}
              style={styles.iconStyling}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.mainBox}>
          <View style={styles.homeContainerHeader2}>
            <View style={styles.avatarWithName}>
              <Image
                source={require('../../../images/avatar.png')}
                style={styles.avatarStyling}
                resizeMode="contain"
              />
              {
                loading ? 
                (
                  <ActivityIndicator />
                ) : (
                  <Text style={styles.haaderTitleVar}>{email}</Text>
                )
              }
            </View>
            <TouchableOpacity style={styles.notificationBox}>
              <Image
                source={require('../../../icons/edit.png')}
                style={styles.iconStyling}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.OptionsContainer}>
              {/* <TouchableOpacity style={styles.optionBox}>
                  <Text style={styles.Text}>
                    Notifications
                  </Text>
                  <Image style={{ width: 24, height: 24, }} source={require('../../../icons/arrow-right.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionBox}>
                  <Text style={styles.Text}>
                    Security
                  </Text>
                  <Image style={{ width: 24, height: 24, }} source={require('../../../icons/arrow-right.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionBox}>
                  <Text style={styles.Text}>
                    Help Center
                  </Text>
                  <Image style={{ width: 24, height: 24, }} source={require('../../../icons/arrow-right.png')} />
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => {setModal(true)}} style={styles.optionBox}>
                  <Text style={styles.Text}>
                    Logout
                  </Text>
                  <Image style={{ width: 24, height: 24, }} source={require('../../../icons/logout.png')} />
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  headerBox: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    paddingHorizontal: "4%",
    backgroundColor: "#FFFFFF",
    minHeight: 90,
  },
  homeContainerHeader: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    paddingHorizontal: "4%",
    justifyContent: "space-between",
  },
  homeContainerHeader2: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  OptionsContainer: {
    width: "100%",
    minHeight: 50,
    marginTop: 45,

  },
  optionBox: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },
  mainBox: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    minHeight: height,
    paddingHorizontal: "4%",
  },
  Text: {
    fontFamily: 'Regular',
    fontSize: 16,
    color: '#232323',
},
  avatarWithName: {
    minWidth: "10%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarStyling: {
    width: 40,
    height: 40,
    borderRadius: 200,
    marginRight: 8,
  },
  notificationBox: {
    width: "20%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  haaderTitle: {
    fontFamily: "MulishBold",
    fontSize: 18,
    color: "#232323",
  },
  haaderTitleVar: {
    fontFamily: "SemiBold",
    fontSize: 18,
    color: "#232323",
  },
  headerText: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "#232323",
  },
  headerlink: {
    fontFamily: "Regular",
    fontSize: 14,
    color: "#2F80ED",
  },
  iconStyling: {
    width: 28,
    height: 28,
  },
  averagePriceBox: {
    width: "100%",
    miHeight: 50,
    top: 74,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  averagePriceBoxContainer: {
    width: "70%",
    height: "100%",
  },
  priceText: {
    fontFamily: "MulishBold",
    fontSize: 28,
    color: "#232323",
    letterSpacing: 0.4,
  },
  listStationComponentBox: {
    width: "100%",
    minHeight: 450,
    backgroundColor: "red",
  },
  listStationComponent: {
    width: "100%",
    height: 100,
    backgroundColor: "blue",
  },
  itemContainer: {
    width: "100%",
    // Assuming square items, adjust as per your requirements
    marginBottom: 35,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 170,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  carouselContainer: {
    flex: 1,
    width: "100%",
    height: 145,
  },
  nearbyFuelingStationContainer: {
    width: "100%",
    minHeight: 30,
    marginBottom: 40,
  },
  nearbyFuelingStationContainerHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bookmarkIconStyling: {
    width: 22,
    height: 22,
  },
  extraFunctionsStyling: {
    width: "100%",
    height: 35,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  upvoteButton: {
    width: 115,
    height: "100%",
    backgroundColor: "#E8E9EE",
    borderRadius: 8,
    paddingHorizontal: 4,
    alignItems: "center",
    flexDirection: "row",
    marginRight: 8,
  },
});
