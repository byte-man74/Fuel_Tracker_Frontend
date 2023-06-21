import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import Button from '../../components/button';
import * as Location from 'expo-location';

const { height } = Dimensions.get('window');

const Permission = ({ navigation }) => {
    const handleSignInPress = () => {
        // Navigate to the sign-in page
        navigation.navigate('PasswordReset');
    };

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [state, setState] = useState('');
    const [localGovernment, setLocalGovernment] = useState('');

    const requestLocationPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Location permission not granted');
            return;
        }

        // Location permission granted, continue with capturing location
        captureLocation();
    };

    const captureLocation = async () => {
        try {
            const { coords } = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = coords;
            setLatitude(latitude);
            setLongitude(longitude);

            // Get state and local government using Bing Maps Geocoding API
            const apiKey = 'Ahndh4GZR21tp2mdoH3VYktZS7HeiGs7-UYmNhOk5gD7G7kAVuY6i57lJC8wHjrL';
            const url = `http://dev.virtualearth.net/REST/v1/Locations/${latitude},${longitude}?o=json&key=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            const address = data.resourceSets[0]?.resources[0]?.address || {};
            setState(address.adminDistrict);
            setLocalGovernment(address.adminDistrict2);
        } catch (error) {
            console.log('Error:', error.message);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <ImageBackground source={require('../../images/Background.png')} style={styles.backgroundImage}>
                    <LottieView source={require('../../images/new_map.json')} autoPlay loop style={styles.carouselItemImage} />
                    <View style={styles.formHeader}>
                        <Text style={styles.formHeaderTitle}>Give priceTracker access to your precise location</Text>
                        <Text style={styles.formHeaderText}>
                            priceTracker needs your precise location to give you turn-by-turn directions and other useful features.
                            <Text style={{ fontFamily: 'MulishBold' }}> View Privacy Policy.</Text>
                        </Text>
                        <Text style={[styles.formHeaderText, { marginTop: 30 }]}>
                            Tap continue and then tap <Text style={{ fontFamily: 'MulishBold' }}>Allow while using the app.</Text>
                        </Text>
                    </View>
                    <View style={styles.bottomCTA}>
                        <Button
                            title="Submit"
                            onPress={requestLocationPermission}
                            color="#1E1E1E" // Custom color
                            textColor="white"
                            width={'100%'} // Custom width
                            height={55}
                        />
                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
};

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
    bottomCTA: {
        width: '100%',
        height: 90,
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
    },
    locationContainer: {
        marginTop: 20,
        paddingHorizontal: 30,
    },
    locationText: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
});

export default Permission;
