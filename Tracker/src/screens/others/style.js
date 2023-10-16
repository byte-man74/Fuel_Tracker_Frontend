import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");


export const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-start",
      minHeight: height * 1.1,
      backgroundColor: "white",
    },
    main: {
      alignItems: "center",
      paddingHorizontal: "2%",
    },
    fullBackground: {
      width: width,
      height: height * 0.2,
      objectFit: "cover",
      paddingHorizontal: "4%",
    },
    header: {
      flex: 1,
      resizeMode: "cover",
      flexDirection: "row",
      justifyContent: "flex-start",
      minHeight: 45,
      alignItems: "center",
      justifyContent: "space-between",
    },
    stationInfo: {
      width: "100%",
      height: 110,
      paddingHorizontal: "4%",
      flexDirection: "row",
    },
    searchContainer: {
      width: "100%",
      height: 60,
      marginTop: 30,
      marginBottom: 30,
    },
    commentSearchContainer: {
      width: "100%",
      height: 120,
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
      paddingLeft: "2.2%",
      fontFamily: "Regular",
      fontSize: 16,
      color: "#232323",
    },
    stationImage: {
      width: 180,
      height: 130,
      marginTop: -30,
      borderRadius: 10,
      borderWidth: 5,
      borderColor: "#D1D1D147",
      marginRight: 7.5,
    },
    stationDetailsTextContainer: {
      width: "48.5%",
      height: "87%",
      alignSelf: "center",
      flexDirection: "row",
    },
    Text: {
      fontFamily: "Regular",
      fontSize: 15,
      color: "#232323",
    },
    EditText: {
      fontFamily: "MulishBold",
      fontSize: 18,
      color: "#232323",
      marginRight: 10,
    },
    upvotedButton: {
      backgroundColor: "#F5A855", // Change the color to your desired upvoted state color
    },
    Text_link: {
      fontFamily: "Regular",
      fontSize: 16,
      color: "#232323",
      textDecorationLine: "underline",
    },
    TextBold: {
      fontFamily: "SemiBold",
      fontSize: 16,
      color: "#232323",
    },
    TimeText: {
      fontFamily: "Regular",
      fontSize: 15,
      color: "#232323",
      right: 0,
    },
    extraFunctionsStyling: {
      width: "90%",
      height: 35,
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
      justifyContent: "space-between",
    },
    loadingContainer: {
      width: "100%",
      height: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    upvoteButton: {
      minWidth: 100,
      height: "100%",
      backgroundColor: "#E8E9EE",
      borderRadius: 8,
      paddingHorizontal: 42,
      alignItems: "center",
      flexDirection: "row",
      marginRight: 8,
    },
    dirButton: {
      width: 108,
      display: "flex",
      justifyContent: "center",
      height: "100%",
      backgroundColor: "#333333",
      borderRadius: 8,
      paddingHorizontal: 7,
      alignItems: "center",
      flexDirection: "row",
      marginRight: 8,
    },
    openingHours: {
      display: "flex",
      justifyContent: "center",
      width: 110,
      height: "100%",
      backgroundColor: "#333333",
      borderRadius: 8,
      paddingHorizontal: 4,
      alignItems: "center",
      flexDirection: "row",
      marginRight: 8,
    },
    trafficIndicator: {
      display: "flex",
      justifyContent: "center",
      width: 85,
      height: "100%",
      backgroundColor: "rgba(102, 189, 112, 1)",
      borderRadius: 8,
      paddingHorizontal: 4,
      alignItems: "center",
      flexDirection: "row",
      marginRight: 8,
    },
    upvoteButton: {
      minWidth: 140,
      height: "100%",
      backgroundColor: "#E8E9EE",
      borderRadius: 8,
      paddingHorizontal: 4,
      alignItems: "center",
      flexDirection: "row",
      marginRight: 8,
    },
    otherDetails: {
      width: "94%",
      minHeight: 120,
      borderBottomColor: "#D9D9D9",
      borderBottomWidth: 1,
      marginBottom: 20,
    },
    secondDetails: {
      width: "94%",
      minHeight: 90,
      gap: 20,
      flexWrap: "wrap",
      flexDirection: "column",
      borderBottomColor: "#D9D9D9",
      borderBottomWidth: 1,
      marginBottom: 20,
      paddingBottom: 10,
      justifyContent: "space-around",
    },
    carouselContainerExtraInfo: {
      width: "100%",
      top: 0,
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
      fontFamily: "MulishBold",
      fontSize: 14,
      color: "#232323",
    },
    stationLocation: {
      fontFamily: "Regular",
      fontSize: 14,
      color: "#232323",
    },
    bookmarkIconStyling: {
      width: 22,
      height: 22,
    },
    commentItem: {
      width: "100%",
      minHeight: 80,
      paddingBottom: 20,
      borderBottomWidth: 2,
      borderColor: "#D1D1D147",
      marginBottom: 10,
    },
    bottomSheetContent: {
      padding: 5,
      alignItems: "center",
    },
    buttomsheetheader: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    buttomsheetheader2: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    feedbackContainer: {
      width: "100%",
      minHeight: 70,
      marginTop: 20,
      alignItems: "center",
    },
    commentFeedbackContainer: {
      width: "100%",
      minHeight: 80,
      alignItems: "center",
    },
    radioContainer: {
      flexDirection: "row",
      paddingLeft: 2,
      marginRight: 6,
    },
    radioOption: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 10,
    },
    radioOptionsContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    radioOptionLabel: {
      fontSize: 14,
      color: "#333", // Customize the text color
    },
  });
  