import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.68;

export const styles = StyleSheet.create({
    sliderContainer: {
      width: "100%",
      // Assuming square items, adjust as per your requirements
    },
    flatListContentContainer: {},
    imageSkeleton: {
      width: "100%",
      height: 210,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
      backgroundColor: "#66666610",
      paddingHorizontal: "7%",
    },
    stationTextSkeleton: {
      width: "40%",
      height: 14,
      backgroundColor: "#66666610",
      borderRadius: 4,
    },
    defaultLogo: {
      width: 35,
      height: 35,
      borderRadius: 400,
      marginRight: 7,
    },
    priceText: {
      fontFamily: "MulishBold", 
      fontSize: 18
    },
    stationLocationSkeleton: {
      width: "80%",
      height: 14,
      backgroundColor: "#66666610",
      borderRadius: 4,
    },
    upvotedButton: {
      backgroundColor: "#F5A855", // Change the color to your desired upvoted state color
    },
    priceSkeleton: {
      width: 40,
      height: 20,
      backgroundColor: "#66666610",
      borderRadius: 4,
    },
    logoSkeleton: {
      width: 35,
      height: 35,
      borderRadius: 400,
      marginRight: 7,
      backgroundColor: "#66666610",
    },
    extraFunctionsStylingSkeleton: {
      width: "100%",
      height: 35,
      marginTop: 14,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#66666680",
      borderRadius: 4,
    },
    trafficIndicatorSkeleton: {
      width: 85,
      height: "100%",
      backgroundColor: "#66666680",
      borderRadius: 4,
    },
    upvoteButtonSkeleton: {
      width: 150,
      height: "100%",
      backgroundColor: "#66666610",
      borderRadius: 4,
    },
    lastUpdatedPriceSkeleton: {
      justifyContent: "flex-end",
      width: "100%",
      height: 35,
      backgroundColor: "#66666610",
      borderRadius: 4,
    },
    itemContainer: {
      width: ITEM_WIDTH,
      // Assuming square items, adjust as per your requirements
      minHeight: 330,
      marginRight: 20,
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
    carouselContainerExtraInfo: {
      width: "100%",
      top: 10,
      minHeight: 60,
      flexDirection: "row",
      alignItems: "center",
    },
    carouselContainerExtraInfoText: {
      minWidth: 50,
      minHeight: 40,
      flexDirection: "column",
      justifyContent: "space-around",
    },
    stationText: {
      fontFamily: "SemiBold",
      fontSize: 15,
      color: "#232323",
      width: "90%",
    },
    stationLocation: {
      fontFamily: "Regular",
      fontSize: 12,
      color: "#232323",
      marginTop: 4,
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
      minWidth: 100,
      height: "100%",
      backgroundColor: "#E8E9EE",
      borderRadius: 8,
      paddingHorizontal: 8,
      alignItems: "center",
      flexDirection: "row",
      marginRight: 8,
    },
    bigContainer: {
      width: 70,
      height: 40,
      backgroundColor: "#DF1525",
    },
  
    trafficIndicator: {
      width: 85,
      height: "100%",
      backgroundColor: "rgba(102, 189, 112, 1)",
      borderRadius: 8,
      paddingHorizontal: 4,
      alignItems: "center",
      flexDirection: "row",
      marginRight: 8,
    },
    lastUpdatedPrice: {
      justifyContent: "flex-end",
      width: "100%",
      height: 35,
    },
    emptyDataContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      padding: 20,
      width: "100%",
      height: "100%",
      backgroundColor: "#F4F4F4",
    },
    emptyDataText: {
      fontSize: 16,
      fontFamily: "Regular",
      color: "#999999",
      textAlign: "center",
    },
    carouselItemImage: {
      width: "70%",
      aspectRatio: 1,
    },
    load: {
      width: 300,
      objectFit: "contain",
    },
  });