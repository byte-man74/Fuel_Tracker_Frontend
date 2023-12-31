import React, { useRef, useEffect, useState } from 'react';
import { Animated, PanResponder, Platform, StyleSheet, View, Dimensions, Keyboard, UIManager } from 'react-native';
import DirectionComponent from '../../components/directionMaps';
import DetailsComponent from '../../components/detailsComponent';


const { height } = Dimensions.get('window');

const BOTTOM_SHEET_MAX_HEIGHT = height * 0.25;
const BOTTOM_SHEET_MIN_HEIGHT = height * 0.15;
const MAX_UPWARD_TRANSLATE_Y = BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const DirectionScreen = ({ navigation, route }) => {
    const { item } = route.params;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;

        if (gesture.dy > 0) {
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation('up', 0);
          } else {
            springAnimation('down', 0);
          }
        } else {
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation('down', 0);
          } else {
            springAnimation('up', 0);
          }
        }
      },
    })
  ).current;


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleKeyboardDidShow = (event) => {
    const keyboardHeight = event.endCoordinates.height;
    springAnimation('up', keyboardHeight);
  };

  const handleKeyboardDidHide = () => {
    springAnimation('down', 0);
  };

  const springAnimation = (direction, keyboardHeight) => {
    lastGestureDy.current = direction === 'down' ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;

    const maxTranslateYWithKeyboard = MAX_UPWARD_TRANSLATE_Y + keyboardHeight;
    const minTranslateYWithKeyboard = MAX_DOWNWARD_TRANSLATE_Y + keyboardHeight;

    if (lastGestureDy.current < maxTranslateYWithKeyboard) {
      lastGestureDy.current = maxTranslateYWithKeyboard;
    } else if (lastGestureDy.current > minTranslateYWithKeyboard) {
      lastGestureDy.current = minTranslateYWithKeyboard;
    }

    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <View style={styles.container}>
      <DirectionComponent 
        navigation={navigation} 
        data={item} 
    />
      <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
        <View style={styles.draggableArea} {...panResponder.panHandlers}>
          <View style={styles.dragHandle} />
        </View>
        <DetailsComponent data={item} navigation={navigation} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: '#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  draggableArea: {
    width: 132,
    height: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },
});

export default DirectionScreen;
