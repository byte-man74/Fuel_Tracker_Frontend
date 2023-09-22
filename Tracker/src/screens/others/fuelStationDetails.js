import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import BottomSheet from "../../components/GlobalComponents/bottomSheet";
import Button from "../../components/GlobalComponents/button";
import Overlay from "../../components/overlay";
import { RadioButton } from "react-native-paper";
import CommentItem from "../../components/Pages/FuelStationDetailsPage/comment";
import api from "../../services/api";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get("window");

const FuelStationDetails = ({ navigation, route }) => {
  const { item, index } = route.params;

  const [OptionBottomSheetVisible, setOptionBottomSheetVisible] =
    useState(false);
  const [PriceBottomSheetVisible, setPriceBottomSheetVisible] = useState(false);
  const [CommentSheetVisible, setCommentSheetVisible] = useState(false);
  const [commentActivityLoading, setcommentActivityLoading] = useState(false);
  const [trafficBottomSheetVisible, setTrafficBottomSheetVisible] =
    useState(false);
  const [price, setPrice] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [Commentloading, setCommentLoading] = useState(true);
  const [priceValue, setPriceValue] = useState("");
  const [priceActivityLoading, setPriceActivityLoading] = useState(false);
  const [active, setActive] = useState(item.active);
  const [selectedRadioOption, setSelectedRadioOption] = useState(1);

  const handleRadioOptionSelect = (value) => {
    setSelectedRadioOption(value);
  };

  const handleUpvote = async (id) => {
    try {
      setActive(true);
      await api.get(`add_votes/${id}/`);
    } catch (error) {
      console.error("Error upvoting:", error);
    }
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

  const handlePriceTextChange = (newText) => {
    setPriceValue(newText);
    console.log(newText);
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

  const add_comment = () => {
    setcommentActivityLoading(true);
    api
      .post(`/add_comments/${item.id}/`, {
        comment: commentText,
      })
      .then((response) => {
        setComments((prevComments) => [...prevComments, response.data]);
        setCommentText("");
        setcommentActivityLoading(false);
      })
      .catch((error) => {
        // Error handling code
        setcommentActivityLoading(false);
      });
  };

  const edit_price = () => {
    setPriceActivityLoading(true);
    api
      .post(`edit_price/get_options/${item.id}/`, {
        vote: false,
        price: priceValue,
      })
      .then((response) => {
        setPriceValue("");
        setPriceActivityLoading(false);
      })
      .catch((error) => {
        // Error handling code
        console.error(error.message);
        setPriceActivityLoading(false);
      });
  };

  const handleTextChange = (newText) => {
    // Update the state with the new text value
    setCommentText(newText);
    console.log(commentText);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {OptionBottomSheetVisible && <Overlay />}
      {PriceBottomSheetVisible && <Overlay />}
      {CommentSheetVisible && <Overlay />}
      {trafficBottomSheetVisible && <Overlay />}
      <View style={styles.backgroundImage}>
        <ImageBackground
          source={require("../../images/backgrnd.png")}
          style={styles.fullBackground}
        >
          <SafeAreaView>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  style={{ width: 32, height: 30 }}
                  source={require("../../icons/back.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={openBottomOption}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../../icons/options.png")}
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
                  source={require("../../icons/star.png")}
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
                      source={require("../../icons/upvote.png")}
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
                source={require("../../../assets/shell.png")}
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
                <View style={styles.dirButton}>
                  <Image
                    source={require("../../icons/maps.png")}
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
                </View>
                <View style={styles.openingHours}>
                  <Image
                    source={require("../../icons/time.png")}
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
                      ? { backgroundColor: "red" } // Apply red background if traffic is 1
                      : item.traffic === 2
                      ? { backgroundColor: "yellow" } // Apply yellow background if traffic is 2
                      : { backgroundColor: "#66BD70" }, // Apply #66BD70 background if traffic is 3
                  ]}
                >
                  <Image
                    source={require("../../icons/traffic.png")}
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
                  source={require("../../icons/edit.png")}
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
                source={require("../../icons/phone.png")}
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
        <View style={styles.bottomSheetContent}>
          <View style={styles.buttomsheetheader}>
            <TouchableOpacity onPress={closeBottomOption}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../images/Icons.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.feedbackContainer}>
            <TouchableOpacity
              onPress={openPriceOptionButton}
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <Image
                style={{ width: 22, height: 22, marginHorizontal: 10 }}
                source={require("../../icons/edit.png")}
              />
              <Text style={styles.Text}>Update Price</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                marginBottom: 30,
              }}
              onPress={openTrafficBottomOption}
            >
              <Image
                style={{ width: 22, height: 22, marginHorizontal: 10 }}
                source={require("../../icons/traffic_black.png")}
              />
              <Text style={styles.Text}>Rate traffic</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openCommentOption}
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Image
                style={{ width: 22, height: 22, marginHorizontal: 10 }}
                source={require("../../icons/comment.png")}
              />
              <Text style={styles.Text}>Comment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>

      {/* bottom sheet box price rating */}
      <BottomSheet
        isVisible={PriceBottomSheetVisible}
        onDismiss={closeBottomOption}
        snapPoints={["35%"]}
      >
        <View style={styles.bottomSheetContent}>
          <View style={styles.buttomsheetheader2}>
            <Text style={styles.EditText}>Update Price</Text>
            <TouchableOpacity onPress={closePriceOptionButton}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../images/Icons.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.feedbackContainer}>
            <TouchableOpacity style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Input Price Option"
                value={priceValue}
                keyboardType="numeric"
                onChangeText={handlePriceTextChange}
              ></TextInput>
            </TouchableOpacity>
            <Button
              title="Submit"
              onPress={edit_price} // Only call handleSubmit when the button is not disabled
              disabled={false}
              color={"#1E1E1E"} // Custom color
              textColor={"white"}
              loading={priceActivityLoading}
              width={"100%"}
              // Custom width
              height={55}
            />
          </View>
        </View>
      </BottomSheet>

      {/* bottom sheet box price rating */}
      <BottomSheet
        isVisible={trafficBottomSheetVisible}
        onDismiss={() => setTrafficBottomSheetVisible(false)}
        snapPoints={["30%"]}
      >
        <View style={styles.buttomsheetheader2}>
          <Text style={styles.EditText}>Update Traffic</Text>
          <TouchableOpacity onPress={closeTrafficBottomOption}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../images/Icons.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.feedbackContainer}>
          <View style={styles.radioOptionsContainer}>
            <TouchableOpacity
              style={[
                styles.radioOption,
                selectedRadioOption === 1 && styles.selectedRadioOption,
              ]}
              onPress={() => handleRadioOptionSelect(1)}
            >
              <RadioButton.Android
                value="1"
                status={selectedRadioOption === 1 ? "checked" : "unchecked"}
                onPress={() => handleRadioOptionSelect(1)}
                color="orange" // Customize the color of the radio button
              />
              <Text style={styles.radioOptionLabel}>Very Bad</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioOption,
                selectedRadioOption === 2 && styles.selectedRadioOption,
              ]}
              onPress={() => handleRadioOptionSelect(2)}
            >
              <RadioButton.Android
                value="2"
                status={selectedRadioOption === 2 ? "checked" : "unchecked"}
                onPress={() => handleRadioOptionSelect(2)}
                color="orange" // Customize the color of the radio button
              />
              <Text style={styles.radioOptionLabel}>Average</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioOption,
                selectedRadioOption === 3 && styles.selectedRadioOption,
              ]}
              onPress={() => handleRadioOptionSelect(3)}
            >
              <RadioButton.Android
                value="3"
                status={selectedRadioOption === 3 ? "checked" : "unchecked"}
                onPress={() => handleRadioOptionSelect(3)}
                color="orange" // Customize the color of the radio button
              />
              <Text style={styles.radioOptionLabel}>Excellent</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          title="Submit"
          onPress={edit_price} // Only call handleSubmit when the button is not disabled
          disabled={false}
          color={"#1E1E1E"} // Custom color
          textColor={"white"}
          loading={priceActivityLoading}
          width={"100%"}
          // Custom width
          height={55}
        />
      </BottomSheet>

      {/* bottom sheet comment box */}
      <BottomSheet
        isVisible={CommentSheetVisible}
        onDismiss={closeBottomOption}
        snapPoints={["40%"]}
      >
        <View style={styles.bottomSheetContent}>
          <View style={styles.buttomsheetheader2}>
            <Text style={styles.EditText}>Comment</Text>
            <TouchableOpacity onPress={closeCommentOptionButton}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../images/Icons.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.commentFeedbackContainer}>
            <TouchableOpacity style={styles.commentSearchContainer}>
              <TextInput
                style={{ ...styles.searchInput, textAlignVertical: "top" }}
                placeholder="Comment on fueling station"
                value={commentText}
                onChangeText={handleTextChange}
              />
            </TouchableOpacity>
            <Button
              title="Submit"
              onPress={add_comment} // Only call handleSubmit when the button is not disabled
              disabled={false}
              color={"#1E1E1E"} // Custom color
              textColor={"white"}
              loading={commentActivityLoading}
              width={"100%"}
              // Custom width
              height={55}
            />
          </View>
        </View>
      </BottomSheet>
    </ScrollView>
  );
};

export default FuelStationDetails;

const styles = StyleSheet.create({
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
    color: '#333', // Customize the text color
  },


});
