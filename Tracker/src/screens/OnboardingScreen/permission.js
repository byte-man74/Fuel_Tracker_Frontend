import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import Button from '../../components/button';
import * as Location from 'expo-location';
import api from "../../services/api";
import Overlay from '../../components/overlay';
const { height } = Dimensions.get('window');

const Permission = ({ navigation }) => {
    const [loading, setLoading] = useState(false)

    const requestLocationPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Location permission not granted');
            return;
        }
        // Fetch user's current location and call update_user_info inside captureLocation
        captureLocation();
    };
    
    const captureLocation = async () => {
        setLoading(true)
        try {
            const { coords } = await Location.getCurrentPositionAsync();
            // After capturing the location and updating latitude and longitude, call update_user_info
            update_user_info(coords.latitude, coords.longitude);
        } catch (error) {
            console.log('Error:', error.message);
        }
    };
    
    const update_user_info = async (latitude, longitude) => {
        console.log(latitude)
        try {
            const response = await api.post("save_user_location", {
                "latitude": latitude,
                "longitude": longitude
              });
    
            if (response.status === 200) {
                console.log("success 🥳");
            }
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {loading && <Overlay />}
            <View>
                <ImageBackground source={require('../../images/Background.png')} style={styles.backgroundImage}>
                    <LottieView source={require('../../images/new_map.json')} autoPlay loop style={styles.carouselItemImage} />
                    <View style={styles.formHeader}>
                        <Text style={styles.formHeaderTitle}>Give PriceWiz access to your precise location</Text>
                        <Text style={styles.formHeaderText}>
                            PriceWiz needs your precise location to give you turn-by-turn directions and other useful features.
                            <Text style={{ fontFamily: 'MulishBold' }}> View Privacy Policy.</Text>
                        </Text>
                        <Text style={[styles.formHeaderText, { marginTop: 30 }]}>
                            Tap continue and then tap <Text style={{ fontFamily: 'MulishBold' }}>Allow while using the app.</Text>
                        </Text>
                    </View>
                    <View style={styles.bottomCTA}>
                        <Button
                            title="Continue"
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
        marginTop: 20
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
