import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import LottieView from 'lottie-react-native';


const { height, width } = Dimensions.get('window');
const handleSignInPress = () => {
    // Navigate to the sign-in page
    navigation.navigate('SignUp');
};

const ResetPasswordOTP = () => {
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
                        <Text style={styles.formHeaderTitle}>
                            Enter your verification Code
                        </Text>
                        <TouchableOpacity onPress={handleSignInPress}>
                            <Text style={styles.formHeaderText}>
                                A password reset code has been sent to your registered email. Kindly go to your email to complete this action.
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        minHeight: height
    },
    formHeader: {
        width: width,
        height: 110,
        justifyContent: 'space-between',
    },
    formHeaderTitle: {
        fontFamily: 'MulishBold',
        fontSize: 22,
        color: '#232323',
        paddingHorizontal: 30
    },
    formHeaderText: {
        fontFamily: 'Regular',
        width: '95%',
        fontSize: 16,
        color: '#232323',
        lineHeight: 29,
        paddingHorizontal: 30
    },
});


