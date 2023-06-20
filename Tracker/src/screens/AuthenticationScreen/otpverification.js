import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Button from '../../components/button';

const { height, width } = Dimensions.get('window');

const SignUp = ({ navigation }) => {
  const handleSignInPress = () => {
    // Navigate to the sign-in page
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <ImageBackground
          source={require('../../images/Background.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.formHeader}>
            <Text style={styles.formHeaderTitle}>
              Enter OTP code
            </Text>
              <Text style={styles.formHeaderText}>
                Enter the confirmation code sent to your registered email. Kindly go to your email to complete this action.
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
    minHeight: height * 1.1
  },
  formHeader: {
    width: width,
    height: 90,
    justifyContent: 'space-between',
    marginTop: height * 0.11
  },
  formHeaderTitle: {
    fontFamily: 'MulishBold',
    fontSize: 22,
    color: '#232323',
    paddingHorizontal: 30
  },
  formHeaderText: {
    fontFamily: 'Regular',
    fontSize: 16,
    color: '#232323',
    paddingHorizontal: 30
  },

});

