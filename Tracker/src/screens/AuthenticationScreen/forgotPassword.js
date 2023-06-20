import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Button from '../../components/button';


const { height, width } = Dimensions.get('window');

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');


  const handleSignInPress = () => {
    // Navigate to the sign-in page
    navigation.navigate('SignUp');
  };
  const isButtonDisabled = email === '';
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <ImageBackground
          source={require('../../images/Background.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.formHeader}>
            <Text style={styles.formHeaderTitle}>
              Lost Password Reset
            </Text>
            <TouchableOpacity onPress={handleSignInPress}>
              <Text style={styles.formHeaderText}>
                Forgotten your password? Enter your email address below to begin the reset process.
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
          </View>
          <View style={styles.bottomCTA}>
            <Button title="Submit"
              onPress={() => { console.log('hello') }}
              disabled={isButtonDisabled}
              color={isButtonDisabled ? '#F6F6F6' : '#1E1E1E'} // Custom color
              textColor={isButtonDisabled ? '#A9A9A9' : 'white'}
              width={'100%'} // Custom width
              height={55} />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    minHeight: height 
  },
  formHeader: {
    width: width,
    height: 85,
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
    lineHeight: 29,
    paddingHorizontal: 30
  },
  formContainer: {
    width: width,
    marginTop: 20,
    minHeight: height * 0.36,
    paddingHorizontal: 30,
    alignItems: 'center'

  },
  formContainerItem: {
    width: "100%",
    height: 90,
    justifyContent: 'space-around',
    marginBottom: 20
  },
  bottomCTA: {
    width: "100%",
    height: 90,
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
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
  },
  remeberMeContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 35,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});




