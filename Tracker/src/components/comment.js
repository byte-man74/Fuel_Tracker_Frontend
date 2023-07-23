import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CommentItem = ({ name, date, comment }) => {
  return (
    <View style={styles.commentItem}>
      <View style={styles.carouselContainerExtraInfo}>
        <Image
          source={require('../images/avatar.png')}
          style={{
            width: 35,
            height: 35,
            borderRadius: 400,
            marginRight: 7,
          }}
        />
        <View style={styles.carouselContainerExtraInfoText}>
          <Text style={styles.stationText}>{name}</Text>
          <Text style={styles.stationLocation}>{date}</Text>
        </View>
      </View>
      <Text style={styles.Text}>{comment}</Text>
    </View>
  );
};

export default CommentItem


const styles = StyleSheet.create({
    header: {
      width: "100%",
      height: 40,
      top: 30,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    stationInfo: {
      width: "100%",
      height: 110,
      paddingHorizontal: "4%",
      flexDirection: "row",
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
      fontSize: 16,
      color: "#232323",
    },
    EditText: {
      fontFamily: "MulishBold",
      fontSize: 18,
      color: "#232323",
      marginRight: 10,
    },
    Text_link: {
      fontFamily: "Regular",
      fontSize: 16,
      color: "#232323",
      textDecorationLine: "underline",
    },
    TextBold: {
      fontFamily: "SemiBold",
      fontSize: 18,
      color: "#232323",
    },
    TimeText: {
      fontFamily: "Regular",
      fontSize: 16,
      color: "#232323",
      position: "absolute",
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
    upvoteButton: {
      width: 150,
      height: "100%",
      backgroundColor: "#E8E9EE",
      borderRadius: 8,
      paddingHorizontal: 4,
      alignItems: "center",
      flexDirection: "row",
      marginRight: 8,
    },
    dirButton: {
      width: 108,
      height: "100%",
      backgroundColor: "#333333",
      borderRadius: 8,
      paddingHorizontal: 7,
      alignItems: "center",
      flexDirection: "row",
      marginRight: 8,
    },
    openingHours: {
      width: 157,
      height: "100%",
      backgroundColor: "#333333",
      borderRadius: 8,
      paddingHorizontal: 4,
      alignItems: "center",
      flexDirection: "row",
      marginRight: 8,
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
      borderBottomColor: "#D9D9D9",
      borderBottomWidth: 1,
      marginBottom: 20,
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
      fontFamily: "SemiBold",
      fontSize: 15,
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
    radioContainer: {
      flexDirection: "row", // Place radio options horizontally
      alignItems: "center", // Align items vertically within the container
      paddingLeft: 2,
      marginRight: 6, // Adjust the spacing between radio options as needed
    },
    radioOption: {
      flexDirection: "row", // Align radio button and text horizontally
      alignItems: "center", // Align items vertically within each option
      marginRight: 10, // Adjust the spacing between radio options as needed
    },
  });
  