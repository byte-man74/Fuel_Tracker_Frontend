import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';


const { height, width } = Dimensions.get('window');


const ResetPasswordOTP = ({ navigation }) => {
    const handleSignInPress = () => {
        // Navigate to the sign-in page
        navigation.navigate('PasswordReset');
    };

    const [countdown, setCountdown] = useState(60);

    useEffect(() => {
        // Decrease the countdown every second
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        // Clear the timer when the component unmounts
        return () => {
            clearInterval(timer);
        };
    }, []);

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
                    <LottieView
                        source={require('../../images/otp.json')}
                        autoPlay
                        loop
                        style={styles.carouselItemImage}
                    />
                    <View style={styles.formHeader}>
                        <Text style={styles.formHeaderTitle}>Enter your verification Code</Text>
                        <Text style={styles.formHeaderText}>
                            A password reset code has been sent to your registered email. Kindly go to your email to complete this action.
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
                        {countdown > 0 ? (
                            <Text style={styles.countdownText}>Resend code in {countdown} seconds</Text>
                        ) : (
                            <TouchableOpacity onPress={handleSignInPress} activeOpacity={0.7}>
                                <Text style={styles.countdownText}>Didn't get a code, get a new code</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    <Image
                        source={require('../../images/bottom_image.png')}
                        style={styles.bottomImage}
                    />
                </ImageBackground>
            </View>
        </ScrollView>
    );
};

export default ResetPasswordOTP;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    carouselItemImage: {
        width: '50%',
        marginTop: 30,
        marginBottom: 40,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        minHeight: height * 1,
    },
    formHeader: {
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
        color: '#232323',
        lineHeight: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 25,
        marginBottom: 15,
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
        paddingHorizontal: 30,
        fontFamily: 'Regular',
        fontSize: 16,
    },
    countdownText: {
        fontFamily: 'Regular',
        fontSize: 16,
        width: '95%',
        color: '#232323',
        marginBottom: 20,
        lineHeight: 30,
    },
    bottomImage: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        width: '100%',
    },

});


