import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import Button from '../../components/button';
import Checkbox from '../../components/checkbox';
import TextLink from '../../components/link';

const { height, width } = Dimensions.get('window');

const TermsAndConditions = () => {

    const handleSignInPress = () => {
        // Navigate to the sign-in page
        navigation.navigate('SignUp');
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
                            Accept price Tracker Terms & Condition
                        </Text>
                        <TouchableOpacity onPress={handleSignInPress}>
                            <Text style={styles.formHeaderText}>
                                By selecting “I Agree” below, I have reviewed and agree to the<Text style={{ fontFamily: 'MulishBold' }}>Terms of Use </Text>and acknowledge the <Text style={{ fontFamily: 'MulishBold' }}>Privacy Policy</Text>. 
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
}

export default TermsAndConditions


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
        minHeight: 150,
        justifyContent: 'space-between',
        marginTop: height * 0.11
    },
    formHeaderTitle: {
        fontFamily: 'MulishBold',
        fontSize: 22,
        color: '#232323',
        lineHeight: 32,
        paddingHorizontal: 30
    },
    formHeaderText: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#232323',
        lineHeight: 32,
        paddingHorizontal: 30
    },
    formContainer: {
        width: width,
        marginTop: 30,
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



