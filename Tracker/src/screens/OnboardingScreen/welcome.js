import React from 'react';
import { StyleSheet, ImageBackground, View, SafeAreaView, Image, Dimensions, StatusBar } from 'react-native';
import Slider from '../../components/slider';
import Button from '../../components/button';

const { height, width } = Dimensions.get('window');


const Welcome = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate('TermsAndCondition');
  };

  return (
    <ImageBackground
      source={require('../../images/Background.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Slider />
        <View style={styles.content}>
          <Button title="Get Started"
            onPress={handleButtonPress}
            color='#1E1E1E' // Custom color
            width={180} // Custom width
            height={50} />
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
