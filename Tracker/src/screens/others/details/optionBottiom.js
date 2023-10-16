import { View, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "../style";


export const OptionModal = ({
  openPriceOptionButton,
  closeBottomOption,
  openTrafficBottomOption,
  openCommentOption
}) => {
  return (
    <View style={styles.bottomSheetContent}>
      <View style={styles.buttomsheetheader}>
        <TouchableOpacity onPress={closeBottomOption}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../../images/Icons.png")}
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
            source={require("../../../icons/edit.png")}
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
            source={require("../../../icons/traffic_black.png")}
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
            source={require("../../../icons/comment.png")}
          />
          <Text style={styles.Text}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
