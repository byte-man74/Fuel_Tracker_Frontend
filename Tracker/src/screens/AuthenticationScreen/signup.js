import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Button from '../../components/button';

const { height, width } = Dimensions.get('window');

const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
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
              Let’s get you signed on
            </Text>
            <TouchableOpacity onPress={handleSignInPress}>
              <Text style={styles.formHeaderText}>
                Already have an account? <Text style={{ fontFamily: 'MulishBold' }}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.formContainerItem}>
              <Text style={styles.formContainerText} >
                Email Address
              </Text>
              <TextInput style={styles.formInputBox} placeholder="-- Enter --"></TextInput>
            </View>
            <View style={styles.formContainerItem}>
              <Text style={styles.formContainerText} >
                Password
              </Text>
              <TextInput style={styles.formInputBox} placeholder="-- Enter --" secureTextEntry={!showPassword} />
              <TouchableOpacity
                style={styles.eyeIconContainer}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={24}
                  color="#888"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.formContainerItem}>
              <Text style={styles.formContainerText} >
                Confirm Password
              </Text>
              <TextInput style={styles.formInputBox} placeholder="-- Enter --" secureTextEntry={!showPassword} />
              <TouchableOpacity
                style={styles.eyeIconContainer}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={24}
                  color="#888"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.formContainerItem}>
              <Button title="Continue"
                onPress={() => {crossOriginIsolated.log('hello')}}
                color='#1E1E1E' // Custom color
                width={'100%'} // Custom width
                height={55} />
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
    minHeight: height * 1.2
  },
  formHeader: {
    width: width,
    height: 55,
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
  formContainer: {
    width: width,
    marginTop: 30,
    minHeight: height * 0.5,
    paddingHorizontal: 30,
    alignItems: 'center'

  },
  formContainerItem: {
    width: "100%",
    height: 90,
    justifyContent: 'space-around',
    marginBottom: 20
  },
  formContainerText: {
    fontFamily: 'Regular',
    fontSize: 14,
    color: '#232323',
  },
  formInputBox: {
    width: "100%",
    height: "60%",
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#AAAAAC',
    borderRadius: 12,
    paddingHorizontal: 10,
    fontFamily: 'Regular',
    fontSize: 16,
  },
    eyeIconContainer: {
      position: 'absolute',
      right: 15,
      top: "50%"
  },

});
