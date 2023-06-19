import React from 'react';
import { StyleSheet, ImageBackground, View, Text, SafeAreaView, Image, Dimensions, StatusBar } from 'react-native';
import Slider from '../../components/slider';
import Button from '../../components/button';

const { height, width } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight || 0;

const Welcome = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate('Authentication');
  };

  return (
    <ImageBackground
      source={require('../../images/Background.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Slider />
        <View style={styles.content}>
          <Button title="Get Started" onPress={handleButtonPress} />
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
  content: {
    width: width,
    marginTop: -40,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
  },
});

export default Welcome;
