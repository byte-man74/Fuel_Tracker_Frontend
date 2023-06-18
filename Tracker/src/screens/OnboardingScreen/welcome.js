import React from 'react';
import { StyleSheet, ImageBackground, View, Text, SafeAreaView, Image, Dimensions, StatusBar } from 'react-native';

const { height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;


const Welcome = () => {
  return (
    <ImageBackground
      source={require('../../images/Background.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../images/cover_image.png')}
          style={styles.coverImage}
        />
        <View style={styles.content}>
          <Text>Hdhhdh</Text>
        </View>
      </SafeAreaView>
      <Image
        source={require('../../images/bottom_image.png')}
        style={styles.bottomImage}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    minHeight: height,
    position: 'relative',
  },
  coverImage: {
    top: -statusBarHeight,
    height: height * 0.45,
    width: '100%',
    resizeMode: 'contain',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
  },
});

export default Welcome;
