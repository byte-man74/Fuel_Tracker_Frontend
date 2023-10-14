import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
    headerBox: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-start",
      paddingHorizontal: "4%",
      backgroundColor: "#FFFFFF",
      minHeight: 97,
      alignItems: "center",
      justifyContent: "center",
    },
    homeContainerHeader: {
      width: "100%",
      height: 55,
      flexDirection: "row",
      paddingHorizontal: "4%",
      justifyContent: "space-between",
    },
    container: {
      flexGrow: 1,
      backgroundColor: "white",
      paddingBottom: "24%",
    },
    mainBox: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-start",
      minHeight: height * 1,
      paddingHorizontal: "4%",
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
      top: 4,
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
      fontSize: RFValue(24),
      color: "#232323",
      letterSpacing: 0.4,
    },
    searchContainer: {
      width: "100%",
      height: 50,
      marginTop: 30,
      marginBottom: 30,
    },
    searchInput: {
      width: "100%",
      height: "100%",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "#ABABAB",
      borderRadius: 8,
      paddingLeft: "13.2%",
      fontFamily: "Regular",
      fontSize: 16,
      color: "#232323",
    },
    nearbyFuelingStationContainer: {
      width: "100%",
      minHeight: 30,
      marginBottom: "8%",
    },
    nearbyFuelingStationContainerHeader: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    carouselBox: {
      flex: 1,
      width: "100%",
      minHeight: 100,
    },
    searchIcon: {
      width: 28,
      height: 28,
      position: 'absolute',
      top: '22.5%',
      left: '3%',
    },
    filterButton: {
      position: 'absolute',
      top: '22.5%',
      right: '3%',
    },
    filterIcon: {
      width: 28,
      height: 28,
    },
  });
  