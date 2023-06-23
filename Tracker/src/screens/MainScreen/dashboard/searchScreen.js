import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableBottomSheet from '../../../components/bottomTab';
import { useIsFocused } from '@react-navigation/native';

export default function SearchScreen() {

  return (
    <DraggableBottomSheet />
  );
}


SearchScreen.navigationOptions = {
  tabBarVisible: false,
};
