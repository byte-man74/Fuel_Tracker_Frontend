import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useState } from "react";
import { styles } from "../style";
import { RadioButton } from "react-native-paper";
import Button from "../../../components/GlobalComponents/button";
import api from "../../../services/api";



export const TrafficModal = ({closeTrafficBottomOption, item}) => {
  const [trafficLoading, setActiveTrafficLoading] = useState(false);
  const [selectedRadioOption, setSelectedRadioOption] = useState(1);


  const handleTrafficVote = () => {
    setActiveTrafficLoading(true);
    api
      .post(`traffic_rating/${item.id}/`, {
        rating_type: selectedRadioOption,
      })
      .then((response) => {
        setSelectedRadioOption(1);
        setActiveTrafficLoading(false);
      });
  };


  const handleRadioOptionSelect = (value) => {
    setSelectedRadioOption(value);
  };

  return (
    <>
      <View style={styles.buttomsheetheader2}>
        <Text style={styles.EditText}>Update Traffic</Text>
        <TouchableOpacity onPress={closeTrafficBottomOption}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../../images/Icons.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.feedbackContainer}>
        <View style={styles.radioOptionsContainer}>
          <TouchableOpacity
            style={[
              styles.radioOption,
              selectedRadioOption === "terrible" && styles.selectedRadioOption,
            ]}
            onPress={() => handleRadioOptionSelect(1)}
          >
            <RadioButton.Android
              value="1"
              status={
                selectedRadioOption === "terrible" ? "checked" : "unchecked"
              }
              onPress={() => handleRadioOptionSelect("terrible")}
              color="orange" // Customize the color of the radio button
            />
            <Text style={styles.radioOptionLabel}>Very Bad</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.radioOption,
              selectedRadioOption === "average" && styles.selectedRadioOption,
            ]}
            onPress={() => handleRadioOptionSelect("average")}
          >
            <RadioButton.Android
              value="2"
              status={
                selectedRadioOption === "average" ? "checked" : "unchecked"
              }
              onPress={() => handleRadioOptionSelect("average")}
              color="orange" // Customize the color of the radio button
            />
            <Text style={styles.radioOptionLabel}>Average</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.radioOption,
              selectedRadioOption === "good" && styles.selectedRadioOption,
            ]}
            onPress={() => handleRadioOptionSelect("good")}
          >
            <RadioButton.Android
              value="3"
              status={selectedRadioOption === "good" ? "checked" : "unchecked"}
              onPress={() => handleRadioOptionSelect("good")}
              color="orange" // Customize the color of the radio button
            />
            <Text style={styles.radioOptionLabel}>Excellent</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        title="Submit"
        onPress={handleTrafficVote} // Only call handleSubmit when the button is not disabled
        disabled={false}
        color={"#1E1E1E"} // Custom color
        textColor={"white"}
        loading={trafficLoading}
        width={"100%"}
        // Custom width
        height={55}
      />
    </>
  );
};
