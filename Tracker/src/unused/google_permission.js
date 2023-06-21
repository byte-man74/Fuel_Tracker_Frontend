import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import Button from '../../components/button';
import * as Location from 'expo-location';
import { apiKey } from '../../config'; // Replace with your Google Maps API key

const { height } = Dimensions.get('window');

const Permission = ({ navigation }) => {
    const handleSignInPress = () => {
        // Navigate to the sign-in page
        navigation.navigate('PasswordReset');
    };

    const [location, setLocation] = useState(null);
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
            setLocation({ latitude, longitude });

            // Get state and local government using geocoding
            const address = await fetchAddressFromCoordinates(latitude, longitude);
            setState(address.state);
            setLocalGovernment(address.localGovernment);
        } catch (error) {
            console.log('Error:', error.message);
        }
    };

    const fetchAddressFromCoordinates = async (latitude, longitude) => {
        const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
        const response = await fetch(geocodingUrl);
        const data = await response.json();

        if (data.status === 'OK') {
            const addressComponents = data.results[0].address_components;
            let state = '';
            let localGovernment = '';

            for (const component of addressComponents) {
                const types = component.types;

                if (types.includes('administrative_area_level_1')) {
                    state = component.long_name;
                } else if (types.includes('administrative_area_level_2')) {
                    localGovernment = component.long_name;
                }
            }

            return {
                state,
                localGovernment,
            };
        }

        return {
            state: '',
            localGovernment: '',
        };
    };

    useEffect(() => {
        requestLocationPermission();
    }, []);

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
                        {location && (
                            <Text style={styles.locationText}>
                                Latitude: {location.latitude}, Longitude: {location.longitude}
                            </Text>
                        )}
                        {state && <Text style={styles.locationText}>State: {state}</Text>}
                        {localGovernment && <Text style={styles.locationText}>Local Government: {localGovernment}</Text>}
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
    locationText: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
});

export default Permission;
