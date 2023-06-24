import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'

const { height, width } = Dimensions.get('window');

const FuelStationDetails = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.backgroundImage}>
                <ImageBackground source={require('../../images/backgrnd.png')} style={styles.fullBackground}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image style={{ width: 32, height: 30}} source={require('../../icons/back.png')}/>  
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ width: 30, height: 30 }} source={require('../../icons/options.png')} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.stationInfo}>
                    <Image style={styles.stationImage} source={require('../../../assets/image3.jpg')} />
                    <View style={styles.stationDetailsTextContainer}>
                        <View style={{ width: '92%', height: '100%', justifyContent: 'space-between'}}>
                            <View style={{ flexDirection: 'row'}}>
                                <Image style={{width: 18, height: 18, marginRight:5}} source={require('../../icons/star.png')} />
                                <Text style={styles.Text}>
                                    4.0 (36)
                                </Text>
                            </View>
                            <Text style={styles.Text}>Helllo me</Text>
                            <View style={styles.extraFunctionsStyling}>
                                <View style={{ width: "100%", height: "100%", flexDirection: 'row', alignItems: 'center' }}>
    
                                    <TouchableOpacity style={styles.upvoteButton}>
                                        <Image source={require('../../icons/upvote.png')} style={{ width: 24, height: 24, marginRight: 5 }} />
                                        <Text style={{ fontFamily: 'Regular', fontSize: 14 }}>Upvote | 24</Text>
                                    </TouchableOpacity>
                                    <Image source={require('../../icons/share.png')} style={{ width: 43.95, height: "90%", marginRight: 5, objectFit: 'contain' }} />
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../icons/bookmark_black.png')} style={{ width: 25, height: 25}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.main}>
                    <View style={styles.otherDetails}>
                        <View style={styles.carouselContainerExtraInfo}>
                            <Image source={require('../../../assets/shell.jpg')} style={{ width: 35, height: 35, borderRadius: 400, marginRight: 7 }} />
                            <View style={styles.carouselContainerExtraInfoText}>
                                <Text style={styles.stationText}>Ooando</Text>
                                <Text style={styles.stationLocation}>Lekki Phase 1, Lagos</Text>
                            </View>
                        </View>
                        <View style={styles.extraFunctionsStyling}>
                            <View style={{ width: "100%", height: "100%", flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={styles.dirButton}>
                                    <Image source={require('../../icons/maps.png')} style={{ width: 24, height: 24, marginRight: 5 }} />
                                    <Text style={{ fontFamily: 'Regular', fontSize: 14, color: 'white' }}>Directions</Text>
                                </TouchableOpacity>
                                <View style={styles.openingHours}>
                                    <Image source={require('../../icons/time.png')} style={{ width: 23, height: 23, marginRight: 5 }} />
                                    <Text style={{ fontFamily: 'Regular', fontSize: 14, color: 'white' }}>From 7am - 11pm</Text>
                                </View>
                                <View style={styles.trafficIndicator}>
                                    <Image source={require('../../icons/traffic.png')} style={{ width: 24, height: 24, marginRight: 5 }} />
                                    <Text style={{ fontFamily: 'Regular', fontSize: 14, color: 'white' }}>Traffic</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={styles.otherDetails}>
                        <Text style={styles.TextBold}>₦560/liter</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={styles.Text}>
                                4.0 (36)
                            </Text>
                            <Image style={{ width: 18, height: 18, marginRight: 5 }} source={require('../../icons/star.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

export default FuelStationDetails

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        minHeight: height * 1.1,
        backgroundColor: 'white'
    },
    main: {
        alignItems: 'center',
        paddingHorizontal: '2%'
    },
    fullBackground: {
        width: width,
        height: height * 0.2,
        objectFit: 'cover',
        paddingHorizontal: '4%'
    },
    header: {
        width: "100%",
        height: 40,
        top: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    stationInfo: {
        width: '100%',
        height: 110,
        paddingHorizontal: '4%',
        flexDirection: 'row'
    },
    stationImage: {
        width: 180,
        height: 130,
        marginTop: -30,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#D1D1D147',
        marginRight: 7.5,
    },
    stationDetailsTextContainer: {
        width: '48.5%',
        height: '87%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    Text: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#232323',

    },
    TextBold: {
        fontFamily: 'SemiBold',
        fontSize: 18,
        color: '#232323',

    },
    extraFunctionsStyling: {
        width: '90%',
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    upvoteButton: {
        width: 115,
        height: "100%",
        backgroundColor: "#E8E9EE",
        borderRadius: 8,
        paddingHorizontal: 4,
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 8
    },
    dirButton: {
        width: 108,
        height: "100%",
        backgroundColor: "#333333",
        borderRadius: 8,
        paddingHorizontal: 7,
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 8
    },
    openingHours: {
        width: 150,
        height: "100%",
        backgroundColor: "#333333",
        borderRadius: 8,
        paddingHorizontal: 4,
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 8  
    },
    trafficIndicator: {
        width: 85,
        height: "100%",
        backgroundColor: "rgba(102, 189, 112, 1)",
        borderRadius: 8,
        paddingHorizontal: 4,
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 8
    },
    otherDetails: {
        width: '94%',

        minHeight: 120,
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 1,
    },
    carouselContainerExtraInfo: {
        width: '100%',
        top: 0,
        minHeight: 60,
        flexDirection: 'row',
        alignItems: "center",
    },
    carouselContainerExtraInfoText: {
        minWidth: 50,
        minHeight: 40,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    stationText: {
        fontFamily: 'SemiBold',
        fontSize: 15,
        color: '#232323',
    },
    stationLocation: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#232323',
    },
    bookmarkIconStyling: {
        width: 22,
        height: 22
    },
})










