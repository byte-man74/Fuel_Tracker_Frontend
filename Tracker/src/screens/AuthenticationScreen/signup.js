import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const SignUp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <ImageBackground
          source={require('../../images/Background.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.formHeader}>
              <Text style={styles.formHeaderTitle} >
                Let’s get you signed on
              </Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    minHeight: height * 1.2
  },
  formHeader: {
    width: width,
    height: 70,
    backgroundColor: 'red',
    marginTop: height * 0.05
  },
  formHeaderTitle: {
    
  }
});
