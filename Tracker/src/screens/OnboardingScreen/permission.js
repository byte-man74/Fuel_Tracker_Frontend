import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';


const { height, width } = Dimensions.get('window')


const Permission = ({ navigation }) => {
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
                        source={require('../../images/new_map.json')}
                        autoPlay
                        loop
                        style={styles.carouselItemImage}
                    />
                    <View style={styles.formHeader}>
                        <Text style={styles.formHeaderTitle}>Give priceTracker access to your precise location</Text>
                        <Text style={styles.formHeaderText}>
                            priceTracker needs your precise location to give you turn-by-turn directions and other useful features. <Text style={{ fontFamily: 'MulishBold' }}>View Privacy Policy.</Text>
                        </Text>
                        <Text style={[styles.formHeaderText, { marginTop: 30 }]}>
                            Tap continue and then tap <Text style={{ fontFamily: 'MulishBold' }}>Allow while using the app.</Text>
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
}

export default Permission


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    carouselItemImage: {
        width: '40%',
        marginTop: 30,
        marginLeft: 10,
        marginBottom: 55,
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


