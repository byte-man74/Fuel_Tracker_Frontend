import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const { height, width } = Dimensions.get('window');

const SignUp = ({ navigation }) => {
  const handleSignInPress = () => {
    // Navigate to the sign-in page
    navigation.navigate('Login');
  };

  // Refs for the OTP input fields
  const otpInputs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Function to focus the next input field
  const focusNextInput = (index) => {
    if (index < otpInputs.length - 1) {
      otpInputs[index + 1].current.focus();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <ImageBackground
          source={require('../../images/Background.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.formHeader}>
            <Text style={styles.formHeaderTitle}>Enter OTP code</Text>
            <Text style={styles.formHeaderText}>
              Enter the confirmation code sent to your registered email. Kindly go to your email to complete this action.
            </Text>
            <View style={styles.otpContainer}>
              {otpInputs.map((input, index) => (
                <TextInput
                  key={index}
                  ref={input}
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="numeric"
                  onChangeText={(text) => {
                    if (text.length === 1) {
                      focusNextInput(index);
                    }
                  }}
                />
              ))}
            </View>
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
    minHeight: height * 1.1,
  },
  formHeader: {
    width: width,
    marginTop: height * 0.11,
    paddingHorizontal: 30,
  },
  formHeaderTitle: {
    fontFamily: 'MulishBold',
    fontSize: 22,
    color: '#232323',
    marginBottom: 10,
  },
  formHeaderText: {
    fontFamily: 'Regular',
    fontSize: 16,
    width: '95%',
    color: '#1E1E1E',
    marginBottom: 20,
    lineHeight: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    width: '90%', 
    marginTop: 15,
    justifyContent: 'space-between',
  },
  otpInput: {
    width: '22%',
    height: 65,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#AAAAAC',
    borderRadius: 12,
    paddingHorizontal: 20,
    fontFamily: 'Regular',
    fontSize: 16,
  },
});
