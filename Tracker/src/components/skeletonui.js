import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";

const { height, width } = Dimensions.get("window");

const SkeletonLoader = () => {
  // Skeleton animation values
  const skeletonShimmerAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Create a shimmering animation
    const shimmerAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(skeletonShimmerAnimation, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(skeletonShimmerAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    );
    shimmerAnimation.start();

    return () => {
      shimmerAnimation.stop();
    };
  }, [skeletonShimmerAnimation]);

  // Skeleton styles
  const skeletonContainerStyle = {
    backgroundColor: "#F0F0F0", // Light gray background
    borderRadius: 10,
    marginBottom: 35,
    justifyContent: "center",
    alignItems: "center",
  };
  const skeletonImageStyle = {
    width: "100%",
    height: 170,
    borderRadius: 8,
    marginBottom: 10
  };
  const skeletonExtraInfoStyle = {
    width: "100%",
    top: 10,
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
  };
  const skeletonText1Style = {
    width: 100,
    height: 18,
    backgroundColor: "#E0E0E0", // Gray shimmering effect
    borderRadius: 4,
    marginRight: 7,
  };
  const skeletonText2Style = {
    width: 100,
    height: 16,
    backgroundColor: "#E0E0E0", // Gray shimmering effect
    borderRadius: 4,
  };
  const skeletonPriceStyle = {
    width: 60,
    height: 18,
    backgroundColor: "#E0E0E0", // Gray shimmering effect
    borderRadius: 4,
    position: "absolute",
    top: "19.5%",
    right: 0,
  };
  const skeletonExtraFunctionsStyle = {
    width: "100%",
    height: 35,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const skeletonUpvoteStyle = {
    width: 75,
    height: "100%",
    backgroundColor: "#E0E0E0", // Gray shimmering effect
    borderRadius: 8,
    paddingHorizontal: 4,
    alignItems: "center",
    flexDirection: "row",
    marginRight: 8,
  };
  const skeletonTrafficStyle = {
    width: 50,
    height: "100%",
    backgroundColor: "#E0E0E0", // Gray shimmering effect
    borderRadius: 8,
    paddingHorizontal: 4,
    alignItems: "center",
    flexDirection: "row",
    marginRight: 8,
  };
  const skeletonLastUpdatedStyle = {
    justifyContent: "flex-end",
    width: "100%",
    height: 35,
    marginTop: 10,
    backgroundColor: "#E0E0E0", // Gray shimmering effect
    borderRadius: 8,
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("FuelStationDetails")}
      style={skeletonContainerStyle}
    >
      <Animated.View
        style={[
          skeletonImageStyle,
          {
            opacity: skeletonShimmerAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: [0.5, 1],
            }),
            backgroundColor: skeletonShimmerAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ["#F0F0F0", "#E0E0E0"],
            }),
          },
        ]}
      />
      <Animated.View
        style={[
          skeletonExtraInfoStyle,
          {
            opacity: skeletonShimmerAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: [0.5, 1],
            }),
            backgroundColor: skeletonShimmerAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ["#F0F0F0", "#E0E0E0"],
            }),
          },
        ]}
      >
        <Animated.View
          style={[
            skeletonText1Style,
            {
              opacity: skeletonShimmerAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: [0.5, 1],
              }),
              backgroundColor: skeletonShimmerAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: ["#F0F0F0", "#E0E0E0"],
              }),
            },
          ]}
        />
        <Animated.View
          style={[
            skeletonText2Style,
            {
              opacity: skeletonShimmerAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: [0.5, 1],
              }),
              backgroundColor: skeletonShimmerAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: ["#F0F0F0", "#E0E0E0"],
              }),
            },
          ]}
        />
        <Animated.View
          style={[
            skeletonPriceStyle,
            {
              opacity: skeletonShimmerAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: [0.5, 1],
              }),
              backgroundColor: skeletonShimmerAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: ["#F0F0F0", "#E0E0E0"],
              }),
            },
          ]}
        />
      </Animated.View>
      <Animated.View
        style={[
          skeletonExtraFunctionsStyle,
          {
            opacity: skeletonShimmerAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: [0.5, 1],
            }),
            backgroundColor: skeletonShimmerAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ["#F0F0F0", "#E0E0E0"],
            }),
          },
        ]}
      >
        <Animated.View
          style={[
            skeletonTrafficStyle,
            {
              opacity: skeletonShimmerAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: [0.5, 1],
              }),
              backgroundColor: skeletonShimmerAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: ["#F0F0F0", "#E0E0E0"],
              }),
            },
          ]}
        />
        <Animated.View
          style={[
            skeletonUpvoteStyle,
            {
              opacity: skeletonShimmerAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: [0.5, 1],
              }),
              backgroundColor: skeletonShimmerAnimation.interpolate({
                inputRange: [0, 100],
                outputRange: ["#F0F0F0", "#E0E0E0"],
              }),
            },
          ]}
        />
      </Animated.View>
      <Animated.View
        style={[
          skeletonLastUpdatedStyle,
          {
            opacity: skeletonShimmerAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: [0.5, 1],
            }),
            backgroundColor: skeletonShimmerAnimation.interpolate({
              inputRange: [0, 100],
              outputRange: ["#F0F0F0", "#E0E0E0"],
            }),
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default SkeletonLoader;

// The rest of your styles can remain the same
