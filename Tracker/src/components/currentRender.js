import { TouchableOpacity, Image, View, Text } from "react-native";
import { styles } from "./CurrentStationSlider";


export const TrafficIndicator = ({ traffic }) => {
  const getTrafficColor = () => {
    switch (traffic) {
      case 1:
        return "#DF1525";
      case 2:
        return "#F3E461";
      default:
        return "#66BD70";
    }
  };

  return (
    <View
      style={[styles.trafficIndicator, { backgroundColor: getTrafficColor() }]}
    >
      <Image
        source={require("../icons/traffic.png")}
        style={{ width: 24, height: 24, marginRight: 5 }}
      />
      <Text style={{ fontFamily: "Regular", fontSize: 14, color: "white" }}>
        Traffic
      </Text>
    </View>
  );
};

export const UpvoteButton = ({ votes, onUpvote }) => {
  const voteText = `${votes} ${
    votes === 1 ? "user" : "users"
  } agreed on price 👍🏾`;

  return (
    <TouchableOpacity style={styles.upvoteButton} onPress={onUpvote}>
      <Text style={{ fontFamily: "Regular", fontSize: 12 }}>{voteText}</Text>
    </TouchableOpacity>
  );
};
