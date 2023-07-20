import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, TextInput, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Slider from '../../../components/verticalSlider';

const { height, width } = Dimensions.get('window');


const HomeScreen = ({ navigation }) => {
    const fadeInAnimation = useRef(new Animated.Value(0)).current;
    const slideInAnimation = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        const fadeIn = Animated.timing(fadeInAnimation, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        });

        const slideIn = Animated.spring(slideInAnimation, {
            toValue: 0,
            speed: 15,
            bounciness: 5,
            useNativeDriver: true,
        });

        Animated.parallel([fadeIn, slideIn]).start();
    }, []);
    return (
        <>
            <View style={styles.headerBox}>
                <View style={styles.homeContainerHeader}>
                    <View style={styles.avatarWithName}>
                        <Image
                            source={require('../../../images/avatar.png')}
                            style={styles.avatarStyling}
                            resizeMode="contain"
                        />
                        <Text style={styles.haaderTitle}>Hello Justice👋</Text>
                    </View>
                    <TouchableOpacity style={styles.notificationBox} onPress={() => navigation.navigate('Notification')}>
                        <Image
                            source={require('../../../icons/notifiction_active.png')}
                            style={styles.iconStyling}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.mainBox}>
                    <View style={styles.averagePriceBox}>
                        <View style={styles.averagePriceBoxContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.priceText}>
                                    ₦540
                                </Text>
                                <Image style={{ width: 24, height: 24, marginLeft: 2 }} source={require('../../../icons/gas.png')} />
                            </View>
                            <Text style={styles.headerText} >Average fuel price near you</Text>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('SearchScreen')}>
                            <Text style={styles.headerlink}>
                                Map view
                            </Text>
                            <Image style={{ width: 24, height: 24, marginLeft: 2 }} source={require('../../../icons/switch.png')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate('SearchScreen')}>
                        <Image
                            source={require('../../../icons/search.png')}
                            style={{ width: 28, height: 28, position: 'absolute', top: "22.5%", left: "3%" }} />
                        <TextInput style={styles.searchInput} placeholder='Search' onFocus={() => navigation.navigate('SearchScreen')} ></TextInput>
                        <TouchableOpacity style={{ position: 'absolute', top: "22.5%", right: "3%" }} onPress={() => navigation.navigate('SearchScreen')}>
                            <Image
                                source={require('../../../icons/filter.png')}
                                style={{ width: 28, height: 28, }}
                            />
                        </TouchableOpacity>

                    </TouchableOpacity>
                    <View style={styles.nearbyFuelingStationContainer}>
                        <Animated.View style={[styles.nearbyFuelingStationContainerHeader, { transform: [{ translateY: slideInAnimation }] }]}>
                            <Text style={styles.haaderTitle}>Fueling stations near you</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('FuelStationDetails')}><Text style={styles.headerText}>view all</Text></TouchableOpacity>
                        </Animated.View>
                        <Animated.View style={[styles.carouselBox, { opacity: fadeInAnimation }]}>
                            <Slider navigation={navigation} />
                        </Animated.View>
                    </View>
                    <View style={styles.nearbyFuelingStationContainer}>
                        <View style={styles.nearbyFuelingStationContainerHeader}>
                            <Text style={styles.haaderTitle}>Saved filling stations</Text>
                            <TouchableOpacity><Text style={styles.headerText}>view all</Text></TouchableOpacity>
                        </View>
                        <View style={styles.carouselBox}>
                            <Slider />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    headerBox: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        paddingHorizontal: '4%',
        backgroundColor: '#FFFFFF',
        minHeight: 90
    },
    homeContainerHeader: {
        width: "100%",
        height: 50,
        top: 45,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    mainBox: {
        top: 10,
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        minHeight: height * 1.23,
        paddingHorizontal: '4%'
    },
    avatarWithName: {
        minWidth: '10%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    avatarStyling: {
        width: 40,
        height: 40,
        borderRadius: 200,
        marginRight: 8,

    },
    notificationBox: {
        width: '20%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    haaderTitle: {
        fontFamily: 'SemiBold',
        fontSize: 18,
        color: '#232323',
    },
    headerText: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#232323',
    },
    headerlink: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#2F80ED',
    },
    iconStyling: {
        width: 28,
        height: 28
    },
    averagePriceBox: {
        width: "100%",
        miHeight: 50,
        top: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    averagePriceBoxContainer: {
        width: '70%',
        height: '100%',
    },
    priceText: {
        fontFamily: 'MulishBold',
        fontSize: 28,
        color: '#232323',
        letterSpacing: 0.4
    },
    searchContainer: {
        width: '100%',
        height: 50,
        marginTop: 30,
        marginBottom: 30
    },
    searchInput: {
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 8,
        paddingLeft: "13.2%",
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#232323',
    },
    nearbyFuelingStationContainer: {
        width: '100%',
        minHeight: 30,
        marginBottom: 40
    },
    nearbyFuelingStationContainerHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    carouselBox: {
        flex: 1,
        width: '100%',
        minHeight: 100,
    }
})