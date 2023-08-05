import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const SkeletonItem = ({ containerWidth }) => {
  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <View style={styles.imageSkeleton}>
        <LottieView
          source={require("../../../images/mapload.json")}
          autoPlay
          loop
          style={styles.load}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.logoSkeleton} />
        <View style={styles.infoContainer}>
          <View style={styles.stationTextSkeleton} />
          <View style={styles.stationLocationSkeleton} />
          <View style={styles.priceSkeleton} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%", // Replace with your desired container width
    minHeight: 330,
    marginRight: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageSkeleton: {
    width: "100%",
    height: 210,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#66666610",
    paddingHorizontal: 7,
  },
  contentContainer: {
    width: "100%",
    top: 10,
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  logoSkeleton: {
    width: 35,
    height: 35,
    borderRadius: 400,
    marginRight: 7,
    backgroundColor: "#66666610",
  },
  infoContainer: {
    minWidth: 50,
    minHeight: 40,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  stationTextSkeleton: {
    width: "40%",
    height: 14,
    backgroundColor: "#66666610",
    borderRadius: 4,
  },
  stationLocationSkeleton: {
    width: "80%",
    height: 14,
    backgroundColor: "#66666610",
    borderRadius: 4,
  },
  priceSkeleton: {
    width: 40,
    height: 20,
    backgroundColor: "#66666610",
    borderRadius: 4,
  },
  extraInfoContainer: {
    width: "100%",
    height: 35,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  load: {
    width: "90%",
    aspectRatio: 1,
  },
});

export default SkeletonItem;
