import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import Button from '../../components/button';
import BottomSheet from '../../components/bottomSheet';
import LottieView from 'lottie-react-native';

const { height, width } = Dimensions.get('window');

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const handleSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  const isButtonDisabled = email === '';

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const handleSubmit = () => {
    openBottomSheet();
    // Additional logic or API calls can be added here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {bottomSheetVisible && <View style={styles.overlay} />}
      <ImageBackground
        source={require('../../images/Background.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.formHeader}>
          <Text style={styles.HeaderTitle}>
            Lost Password Reset
          </Text>
          <TouchableOpacity onPress={handleSignUpPress}>
            <Text style={styles.HeaderText}>
              Forgotten your password? Enter your email address below to begin the reset process.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formContainerItem}>
            <Text style={styles.formContainerText}>
              Email Address
            </Text>
            <TextInput
              style={styles.InputBox}
              value={email}
              onChangeText={setEmail}
              placeholder="-- Enter --"
            />
          </View>
        </View>
        <View style={styles.bottomCTA}>
          <Button
            title="Submit"
            onPress={handleSubmit}
            disabled={isButtonDisabled}
            color={isButtonDisabled ? '#F6F6F6' : '#1E1E1E'} // Custom color
            textColor={isButtonDisabled ? '#A9A9A9' : 'white'}
            width="100%" // Custom width
            height={55}
          />
        </View>
      </ImageBackground>

      {/* bottom sheet box */}
      <BottomSheet
        isVisible={bottomSheetVisible}
        onDismiss={closeBottomSheet}
        snapPoints={['60%']}
      >
        <View style={styles.bottomSheetContent}>
          <View style={styles.buttomsheetheader}>
            <TouchableOpacity onPress={closeBottomSheet}>
              <Image style={{ width: 30, height: 30 }} source={require('../../images/Icons.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.feedbackContainer}>
            <LottieView
              source={require('../../images/mail.json')}
              autoPlay
              loop
              style={styles.carouselItemImage}
            />
            <Text style={styles.headFeedback}>
              A verification code has been sent to your email.
            </Text>
            <Text style={styles.bodyFeedback}>
              Kindly confirm the verification code sent to your email. Only then will the advanced account features become available.
            </Text>
            <Button
              title="Proceed"
              onPress={handleSubmit}
              color="#1E1E1E"
              width="100%"
            />
          </View>
        </View>
      </BottomSheet>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    minHeight: height,
  },
  formHeader: {
    width,
    height: 85,
    justifyContent: 'space-between',
    marginTop: height * 0.11,
  },
  HeaderTitle: {
    fontFamily: 'MulishBold',
    fontSize: 22,
    color: '#232323',
    paddingHorizontal: 30,
  },
  HeaderText: {
    fontFamily: 'Regular',
    fontSize: 16,
    color: '#232323',
    lineHeight: 29,
    paddingHorizontal: 30,
  },
  formContainer: {
    width,
    marginTop: 20,
    minHeight: height * 0.36,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 200,
    backgroundColor: 'rgba(51, 51, 51, 0.54)',
  },
  formContainerItem: {
    width: '100%',
    height: 90,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  formContainerText: {
    fontFamily: 'Regular',
    fontSize: 14,
    color: '#232323',
  },
  InputBox: {
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#AAAAAC',
    borderRadius: 12,
    paddingHorizontal: 10,
    fontFamily: 'Regular',
    fontSize: 16,
  },
  bottomCTA: {
    width: '100%',
    height: 90,
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
  },
  bottomSheetContent: {
    padding: 5,
    alignItems: 'center',
  },
  buttomsheetheader: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  feedbackContainer: {
    width: '100%',
    minHeight: 70,
    alignItems: 'center',
  },
  carouselItemImage: {
    width: '35%',
  },
  headFeedback: {
    fontFamily: 'SemiBold',
    fontSize: 22,
    color: '#232323',
    marginBottom: 20,
    marginTop: 20,
    width: '85%',
    textAlign: 'center',
  },
  bodyFeedback: {
    fontFamily: 'Regular',
    fontSize: 16,
    width: '85%',
    color: '#232323',
    marginBottom: 60,
    lineHeight: 30,
    textAlign: 'center',
  },
});

export default ForgetPassword;
