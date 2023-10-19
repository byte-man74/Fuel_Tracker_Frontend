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
import { SafeAreaView } from "react-native-safe-area-context";
import OpenMap from "react-native-open-maps";
import { OptionModal } from "./optionBottiom";
import { PriceUpdate } from "./priceRating";
import { styles } from "../style";
import CommentModal from "./commentBottom";
import { closeAllBottomSheet } from "./helper_functions/main";
import { fetchComments } from "./helper_functions/main";
import { handleUpvote } from "./helper_functions/main";
import { fetchCurrentPrice } from "./helper_functions/main";

const FuelStationDetails = ({ navigation, route }) => {
  const { item } = route.params;

  // bottom sheet state
  const [bottomSheetsVisible, setBottomSheetsVisible] = useState({
    option: false,
    price: false,
    comment: false,
    traffic: false,
  });

  //loading state
  const [Commentloading, setCommentLoading] = useState(true);

  const [price, setPrice] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [active, setActive] = useState(item.active);

  //get comment
  useEffect(() => {
    fetchComments(setComments, setCommentLoading, navigation, item);
    fetchCurrentPrice(item, navigation, setPrice, setCommentLoading);
  }, [commentText]);

  //get price
  const openMapsApp = (latitude, longitude) => {
    OpenMap({
      latitude,
      longitude,
      query: item.name,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.values(bottomSheetsVisible).some((isVisible) => isVisible) && (
        <Overlay />
      )}

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
              <TouchableOpacity
                onPress={() =>
                  setBottomSheetsVisible((prevState) => ({
                    ...prevState,
                    option: !prevState.option,
                  }))
                }
              >
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
                    onPress={() => handleUpvote(item.id, setActive)}
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
              onPress={() =>
                setBottomSheetsVisible((prevState) => ({
                  ...prevState,
                  price: !prevState.price,
                }))
              }
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
      {/* bottom sheet box option */}
      <BottomSheet
        isVisible={bottomSheetsVisible.option}
        onDismiss={() => closeAllBottomSheet(setBottomSheetsVisible)}
        snapPoints={["32%"]}
      >
        <OptionModal
          openPriceOptionButton={() =>
            setBottomSheetsVisible((prevState) => ({
              ...prevState,
              price: !prevState.price,
            }))
          }
          closeBottomOption={() =>
            setBottomSheetsVisible((prevState) => ({
              ...prevState,
              option: !prevState.option,
            }))
          }
          openTrafficBottomOption={() =>
            setBottomSheetsVisible((prevState) => ({
              ...prevState,
              traffic: !prevState.traffic,
            }))
          }
          openCommentOption={() =>
            setBottomSheetsVisible((prevState) => ({
              ...prevState,
              comment: !prevState.comment,
            }))
          }
        />
      </BottomSheet>

      {/* bottom sheet box price rating */}
      <BottomSheet
        isVisible={bottomSheetsVisible.price}
        onDismiss={() => closeAllBottomSheet(setBottomSheetsVisible)}
        snapPoints={["35%"]}
      >
        <PriceUpdate
          closePriceOptionButton={() =>
            setBottomSheetsVisible((prevState) => ({
              ...prevState,
              price: !prevState.price,
            }))
          }
          item={item}
        />
      </BottomSheet>

      {/* bottom sheet box traffic rating */}
      <BottomSheet
        isVisible={bottomSheetsVisible.traffic}
        onDismiss={() => closeAllBottomSheet(setBottomSheetsVisible)}
        snapPoints={["30%"]}
      >
        <TrafficModal
          closeTrafficBottomOption={() =>
            setBottomSheetsVisible((prevState) => ({
              ...prevState,
              option: false,
              traffic: !prevState.traffic,
            }))
          }
          item={item}
        />
      </BottomSheet>

      {/* bottom sheet comment box */}
      <BottomSheet
        isVisible={bottomSheetsVisible.comment}
        onDismiss={() => closeAllBottomSheet(setBottomSheetsVisible)}
        snapPoints={["40%"]}
      >
        <CommentModal
          closeCommentOptionButton={() =>
            setBottomSheetsVisible((prevState) => ({
              ...prevState,
              option: false,
              comment: !prevState.comment,
            }))
          }
          commentText={commentText}
          setCommentText={setCommentText}
          item={item}
        />
      </BottomSheet>
    </ScrollView>
  );
};

export default FuelStationDetails;
