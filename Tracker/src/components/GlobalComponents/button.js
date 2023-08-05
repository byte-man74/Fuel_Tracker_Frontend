import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

/**
 * A customizable button component.
 * 
 * @param {string} title - The text displayed on the button.
 * @param {function} onPress - Callback function when the button is pressed.
 * @param {string} color - Background color of the button.
 * @param {number} width - Width of the button.
 * @param {number} height - Height of the button.
 * @param {ImageSource} imageSource - Source of an optional image displayed before the text.
 * @param {boolean} loading - Whether the button is in a loading state.
 * @param {string} textColor - Color of the button text.
 */
const Button = ({
  title,
  onPress,
  color,
  width,
  height,
  imageSource,
  loading,
  textColor = 'white',
}) => {
  const containerStyles = [
    styles.container,
    { backgroundColor: color, width, height },
  ];
  const textStyles = [styles.text, { color: textColor }];

  return (
    <TouchableOpacity style={containerStyles} onPress={onPress}>
      {loading ? (
        <LottieView
          source={require('../../images/laud.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      ) : (
        <>
          {imageSource && <Image source={imageSource} style={styles.image} />}
          <Text style={textStyles}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    position: 'relative',
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    marginRight: 8,
  },
  text: {
    fontFamily: 'MulishBold',
    fontSize: 14,
  },
  animation: {
    width: '30%',
  },
});

export default Button;
