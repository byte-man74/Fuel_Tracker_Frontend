import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'


const { height } = Dimensions.get("window");

const ModalContainer = ({ children, setModal}) => {
  return (
    <TouchableOpacity
    style={{
      width: "100%",
      height: height,
      backgroundColor: "rgba(0, 0, 0, 0.49)",
      position: "absolute",
      top: 0,
      justifyContent: "center",
      alignItems: "center",
      right: 0,
      zIndex: 100,
    }}
    onPress={() => {
      setModal(false);
    }}
  >
    {children}
  </TouchableOpacity>
  )
}

export default ModalContainer