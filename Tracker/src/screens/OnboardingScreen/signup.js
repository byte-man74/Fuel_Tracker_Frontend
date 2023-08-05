import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Button from '../../components/GlobalComponents/button';
import api from '../../services/api';

const { height, width } = Dimensions.get('window');

const SignUp = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const successsMessage = true


  const handleSignInPress = async () => {
    setLoading(true);
    try {
      const response = await api.post("register/", {
        email,
        password,
      });

      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{ 
          name: 'Authentication',
          params: {
            successMessage: successsMessage, // Pass the successMessage variable as a prop
          },
        }],
      });      
    } catch (error) {
      console.error(error)
      setLoading(false);
      if (!error.response) {
        // No Internet Connection Error
        navigation.navigate('NoNetwork');
        return;
      }
  
      if (error.response.status === 500) {
        // Server Error
        navigation.navigate('ServerScreen');
        return;
      }
      if (error.response && error.response.data && error.response.data.detail) {
        
        setErrorMessage(error.response.data.detail);
        setTimeout(() => {
          setErrorMessage(null);
        }, 8000);
      } else {
        setErrorMessage(
          "An error occurred during sign up. Please try again later."
        );
        // Delay the reset of the error state after 3 seconds
        setTimeout(() => {
          setErrorMessage(null);
        }, 8000);
      }
    }
  };
  const isButtonDisabled = email === '' || password === '' || password !== confirmPassword;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <ImageBackground
          source={require('../../images/Background.png')}
          style={styles.backgroundImage}
        >
        {errorMessage ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{errorMessage}</Text>
            </View>
          ) : (
            <></>
          )}
          <View style={styles.formHeader}>
            <Text style={styles.formHeaderTitle}>
              Let’s get you started
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Authentication")}>
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
              <TextInput
                style={styles.formInputBox}
                value={email}
                onChangeText={setEmail}
                placeholder="-- Enter --">
                
                </TextInput>
            </View>
            <View style={styles.formContainerItem}>
              <Text style={styles.formContainerText} >
                Password
              </Text>
              <TextInput
                style={styles.formInputBox}
                placeholder="-- Enter --"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}/>
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
              <TextInput
                style={styles.formInputBox}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="-- Enter --"
                secureTextEntry={!showPassword} />
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
              <Button
                title="Create Account"
                onPress={handleSignInPress}
                disabled={isButtonDisabled}
                color={isButtonDisabled ? "#F6F6F6" : "#1E1E1E"} // Custom color
                textColor={isButtonDisabled ? "#A9A9A9" : "white"}
                loading={loading}
                width={"100%"} // Custom width
                height={55}
              />
            </View>
          </View>
          {/* < View style={styles.otherCTA}>
            <View style={styles.orContainer}>
              <Image
                source={require('../../images/Line.png')}
              />
              <Text style={{ fontFamily: 'Regular', fontSize: 14 }}>or</Text>
              <Image
                source={require('../../images/Line.png')}
              />
            </View>
            <View style={[styles.formContainerItem, { marginBottom: 0 }]}>
              <Button title="Continue with Google"
                imageSource={require('../../images/google.png')}
                onPress={() => { navigation.navigate('OtpVerification') }}
                color='#EFEFEF' // Custom color
                width={'100%'} // Custom width
                textColor="black"
                height={55} />
            </View>
            <View style={[styles.formContainerItem, { marginBottom: 0 }]}>
              <Button title="Continue with Apple"
                imageSource={require('../../images/apple.png')}
                onPress={() => { crossOriginIsolated.log('hello') }}
                color='#EFEFEF' // Custom color
                width={'100%'} // Custom width
                textColor="black"
                height={55} />
            </View>
            <View style={[styles.formContainerItem, { marginBottom: 0 }]}>
              <Button title="Continue with facebook"
                imageSource={require('../../images/fb.png')}
                onPress={() => { crossOriginIsolated.log('hello') }}
                color='#EFEFEF' // Custom color
                width={'100%'} // Custom width
                textColor="black"
                height={55} />
            </View>
          </View> */}

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
  errorContainer: {
    width: "100%",
    height: 65,
    backgroundColor: "#EE1B0E",
    position: "absolute",
    top: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 1,
  },
  errorText: {
    fontFamily: "MulishBold",
    fontSize: 14,
    color: "#fff",
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 15,
    top: "50%"
  },
  otherCTA: {
    width: '100%',
    height: height * 0.4,
    paddingHorizontal: 30,


  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 30,
    marginBottom: 10,
    alignItems: 'center',

  }
});




///todo
/*
change the button color when the input is empty✅
connect to api
add the modal on form submission

*/