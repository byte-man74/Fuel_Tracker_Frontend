import {
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import BottomSheet from "../../../components/GlobalComponents/bottomSheet";
import Overlay from "../../../components/overlay";
import { TrafficModal } from "./trafficModal";

import CommentItem from "../../../components/Pages/FuelStationDetailsPage/comment";
import api from "../../../services/api";
import { SafeAreaView } from "react-native-safe-area-context";
import OpenMap from "react-native-open-maps";
import { OptionModal } from "./optionBottiom";
import { PriceUpdate } from "./priceRating";
import { styles } from "../style";
import CommentModal from "./commentBottom";

const FuelStationDetails = ({ navigation, route }) => {
  const { item, index } = route.params;

  // bottom sheet state
  const [OptionBottomSheetVisible, setOptionBottomSheetVisible] =
    useState(false);
  const [PriceBottomSheetVisible, setPriceBottomSheetVisible] = useState(false);
  const [CommentSheetVisible, setCommentSheetVisible] = useState(false);
  const [trafficBottomSheetVisible, setTrafficBottomSheetVisible] =
    useState(false);

  //loading state

  const [Commentloading, setCommentLoading] = useState(true);

  // data state
  const [price, setPrice] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const [active, setActive] = useState(item.active);

  const handleUpvote = async (id) => {
    try {
      setActive(true);
      await api.get(`add_votes/${id}/`);
    } catch (error) {}
  };

  const openBottomOption = () => {
    setOptionBottomSheetVisible(true);
  };

  const closeBottomOption = () => {
    setOptionBottomSheetVisible(false);
  };

  const openPriceOptionButton = () => {
    closeBottomOption();
    setPriceBottomSheetVisible(true);
  };

  const openCommentOption = () => {
    closeBottomOption();
    setCommentSheetVisible(true);
  };

  const closePriceOptionButton = () => {
    setPriceBottomSheetVisible(false);
  };

  const openTrafficBottomOption = () => {
    closeBottomOption();
    setTrafficBottomSheetVisible(true); //
  };

  const closeTrafficBottomOption = () => {
    setTrafficBottomSheetVisible(false);
  };

  const closeCommentOptionButton = () => {
    setCommentSheetVisible(false);
  };

  //get comment
  useEffect(() => {
    api
      .get(`/get_comments/${item.id}/`)
      .then((response) => {
        setComments(response.data.comments);
        setCommentLoading(false);
      })
      .catch((error) => {
        if (!error.response) {
          // No Internet Connection Error
          navigation.navigate("NoNetwork");
          return;
        }

        if (error.response.status === 500 || error.response.status === 502) {
          // Server Error
          navigation.navigate("ServerScreen");
          return;
        }
        setCommentLoading(false);
      });
  }, [commentText]);

  //get price
  useEffect(() => {
    api
      .get(`/get_current_price/${item.id}/`)
      .then((response) => {
        setPrice(response.data.amount);
      })
      .catch((error) => {
        if (!error.response) {
          // No Internet Connection Error
          navigation.navigate("NoNetwork");
          return;
        }

        if (error.response.status === 500 || error.response.status === 502) {
          // Server Error
          navigation.navigate("ServerScreen");
          return;
        }
        setCommentLoading(false);
      });
  }, []);

  const openMapsApp = (latitude, longitude) => {
    OpenMap({
      latitude,
      longitude,
      query: item.name,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {OptionBottomSheetVisible && <Overlay />}
      {PriceBottomSheetVisible && <Overlay />}
      {CommentSheetVisible && <Overlay />}
      {trafficBottomSheetVisible && <Overlay />}
      <View style={styles.backgroundImage}>
        <ImageBackground
          source={require("../../../images/backgrnd.png")}
          style={styles.fullBackground}
        >
          <SafeAreaView>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{ width: 32, height: 30 }}
                  source={require("../../../icons/back.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={openBottomOption}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../../../icons/options.png")}
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
        <View style={styles.stationInfo}>
          <Image style={styles.stationImage} source={item.image} />
          <View style={styles.stationDetailsTextContainer}>
            <View
              style={{
                width: "92%",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ width: 18, height: 18, marginRight: 5 }}
                  source={require("../../../icons/star.png")}
                />
                <Text style={styles.Text}>({item.votes})</Text>
              </View>
              <Text style={styles.Text_link}>View Ratings</Text>
              <View style={styles.extraFunctionsStyling}>
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={[
                      styles.upvoteButton,
                      item.has_voted || active ? styles.upvotedButton : null,
                    ]}
                    onPress={() => handleUpvote(item.id)}
                  >
                    <Image
                      source={require("../../../icons/upvote.png")}
                      style={{ width: 20, height: 20, marginRight: 5 }}
                    />
                    <Text style={{ fontFamily: "Regular", fontSize: 14 }}>
                      Upvote price | {item.votes}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.otherDetails}>
            <View style={styles.carouselContainerExtraInfo}>
              <Image
                source={require("../../../../assets/shell.png")}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 400,
                  marginRight: 7,
                }}
              />
              <View style={styles.carouselContainerExtraInfoText}>
                <Text style={styles.stationText}>{item.name}</Text>
                <Text style={styles.stationLocation}>{item.address}</Text>
              </View>
            </View>
            <View style={styles.extraFunctionsStyling}>
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    openMapsApp(
                      parseFloat(item.latitude),
                      parseFloat(item.longitude)
                    );
                  }}
                  style={styles.dirButton}
                >
                  <Image
                    source={require("../../../icons/maps.png")}
                    style={{ width: 20, height: 20, marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "Regular",
                      fontSize: 14,
                      color: "white",
                    }}
                  >
                    Directions
                  </Text>
                </TouchableOpacity>
                <View style={styles.openingHours}>
                  <Image
                    source={require("../../../icons/time.png")}
                    style={{ width: 20, height: 20, marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "Regular",
                      fontSize: 14,
                      color: "white",
                    }}
                  >
                    Open now
                  </Text>
                </View>
                <View
                  style={[
                    styles.trafficIndicator,
                    item.traffic === 1
                      ? { backgroundColor: "#DF1525" }
                      : item.traffic === 2
                      ? { backgroundColor: "#F3E461" }
                      : { backgroundColor: "#66BD70" },
                  ]}
                >
                  <Image
                    source={require("../../../icons/traffic.png")}
                    style={{ width: 24, height: 24, marginRight: 5 }}
                  />
                  <Text
                    style={{
                      fontFamily: "Regular",
                      fontSize: 14,
                      color: "white",
                    }}
                  >
                    Traffic
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.secondDetails}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text style={styles.TextBold}>Fuel Price</Text>
              <View
                style={{
                  minWidth: 225,
                  padding: 3,
                  height: 30,
                  backgroundColor: "#F6CA63",
                  marginLeft: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 8,
                }}
              >
                <Text style={styles.Text}>
                  {item.votes} users agreed with price 👍🏾
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={openPriceOptionButton}
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 2, alignItems: "center" }}
              >
                {price ? (
                  <Text style={styles.EditText}>₦{price}L</Text>
                ) : (
                  <ActivityIndicator />
                )}
                <Image
                  style={{ width: 18, height: 18, marginHorizontal: 5 }}
                  source={require("../../../icons/edit.png")}
                />
                <Text style={styles.Text}>Update Price</Text>
              </View>
              <Text style={styles.TimeText}>{item.time_posted}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondDetails}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Text style={styles.TextBold}>Contact information</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 18, height: 18, marginHorizontal: 5 }}
                source={require("../../../icons/phone.png")}
              />
              <Text style={styles.Text}>--- --- ---</Text>
            </View>
          </View>
          <View style={styles.secondDetails}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Text style={styles.TextBold}>Comments</Text>
            </View>
            <View
              style={{
                width: "100%",
                minHeight: 100,
                backgroundColor: "#F4F4F4",
                borderRadius: 10,
                padding: 10,
              }}
            >
              {Commentloading ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator size="large" color="#007AFF" />
                </View>
              ) : comments.length === 0 ? (
                <View style={styles.emptyCommentsContainer}>
                  <Text style={styles.emptyCommentsText}>
                    No comments available.
                  </Text>
                </View>
              ) : (
                comments.map((comment) => (
                  <CommentItem
                    key={comment.id}
                    name={comment.user_email}
                    date={comment.date_time_commented}
                    comment={comment.comment}
                  />
                ))
              )}
            </View>
          </View>
        </View>
      </View>
      {/* bottom sheet box share */}
      <BottomSheet
        isVisible={OptionBottomSheetVisible}
        onDismiss={closeBottomOption}
        snapPoints={["32%"]}
      >
        <OptionModal
          openPriceOptionButton={openPriceOptionButton}
          closeBottomOption={closeBottomOption}
          openTrafficBottomOption={openTrafficBottomOption}
          openCommentOption={openCommentOption}
        />
      </BottomSheet>

      {/* bottom sheet box price rating */}
      <BottomSheet
        isVisible={PriceBottomSheetVisible}
        onDismiss={closeBottomOption}
        snapPoints={["35%"]}
      >
        <PriceUpdate closePriceOptionButton={closePriceOptionButton} />
      </BottomSheet>

      {/* bottom sheet box price rating */}
      <BottomSheet
        isVisible={trafficBottomSheetVisible}
        onDismiss={() => setTrafficBottomSheetVisible(false)}
        snapPoints={["30%"]}
      >
        <TrafficModal
          closeTrafficBottomOption={closeTrafficBottomOption}
          item={item}
        />
      </BottomSheet>

      {/* bottom sheet comment box */}
      <BottomSheet
        isVisible={CommentSheetVisible}
        onDismiss={closeBottomOption}
        snapPoints={["40%"]}
      >
        <CommentModal
          closeCommentOptionButton={closeCommentOptionButton}
          commentText={commentText}
          setCommentText={setCommentText}
          item={item}
        />
      </BottomSheet>
    </ScrollView>
  );
};

export default FuelStationDetails;
