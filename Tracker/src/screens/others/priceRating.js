import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { useState } from "react";
import { styles } from "./details/fuelStationDetails";
import Button from "../../components/GlobalComponents/button";
import api from "../../services/api";



export const PriceUpdate = ({ closePriceOptionButton, item}) => {
  const [priceActivityLoading, setPriceActivityLoading] = useState(false);
  const [priceValue, setPriceValue] = useState("");



  const handlePriceTextChange = (newText) => {
    setPriceValue(newText);
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
        setPriceActivityLoading(false);
      });
  };

  return (
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
  );
};
