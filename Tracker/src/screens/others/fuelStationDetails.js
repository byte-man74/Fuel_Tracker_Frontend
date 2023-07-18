import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react'
import BottomSheet from '../../components/bottomSheet';
import Button from '../../components/button';
import Overlay from '../../components/overlay';
import { RadioButton } from 'react-native-paper';

const { height, width } = Dimensions.get('window');

const FuelStationDetails = ({ navigation }) => {
    const [OptionBottomSheetVisible, setOptionBottomSheetVisible] = useState(false);
    const [PriceBottomSheetVisible, setPriceBottomSheetVisible] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);
    const [figure, setFigure] = useState('');

    const handleFigureChange = (text) => {
        // Handle figure input changes
        setFigure(text);
    };

    const handlePressOption = () => {
        // Navigate to the sign-in page
        openBottomOption()
    };

    const openBottomOption = () => {
        setOptionBottomSheetVisible(true);
    };

    const closeBottomOption = () => {
        setOptionBottomSheetVisible(false);
    };


    const openPriceOptionButton = () => {
        closeBottomOption()
        setPriceBottomSheetVisible(true);
    };

    const closePriceOptionButton = () => {
        setPriceBottomSheetVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {OptionBottomSheetVisible && <Overlay />}
            {PriceBottomSheetVisible && <Overlay />}
            <View style={styles.backgroundImage}>
                <ImageBackground source={require('../../images/backgrnd.png')} style={styles.fullBackground}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image style={{ width: 32, height: 30 }} source={require('../../icons/back.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openBottomOption}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../icons/options.png')} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.stationInfo}>
                    <Image style={styles.stationImage} source={require('../../../assets/image3.jpg')} />
                    <View style={styles.stationDetailsTextContainer}>
                        <View style={{ width: '92%', height: '100%', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 18, height: 18, marginRight: 5 }} source={require('../../icons/star.png')} />
                                <Text style={styles.Text}>
                                    4.0 (36)
                                </Text>
                            </View>
                            <Text style={styles.Text_link}>View Ratings</Text>
                            <View style={styles.extraFunctionsStyling}>
                                <View style={{ width: "100%", height: "100%", flexDirection: 'row', alignItems: 'center' }}>

                                    <TouchableOpacity style={styles.upvoteButton}>
                                        <Image source={require('../../icons/upvote.png')} style={{ width: 24, height: 24, marginRight: 5 }} />
                                        <Text style={{ fontFamily: 'Regular', fontSize: 14 }}>Upvote price | 24</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../icons/bookmark_black.png')} style={{ width: 25, height: 25 }} />
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
                    <View style={styles.secondDetails}>
                        <View style={{ flexDirection: 'row', width: "100%", alignItems: 'center' }}>
                            <Text style={styles.TextBold}>
                                Fuel Price / Liter (₦)
                            </Text>
                            <View style={{ width: 180, height: 30, backgroundColor: '#F6CA63', marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
                                <Text style={styles.Text}>
                                    330 users approved 👍🏾
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={openPriceOptionButton} style={{ flexDirection: 'row', width: "100%", alignItems: 'center' }}>
                            <Text style={styles.EditText}>
                                ₦540
                            </Text>
                            <Image style={{ width: 18, height: 18, marginHorizontal: 5 }} source={require('../../icons/edit.png')} />
                            <Text style={styles.Text}>
                                Update Price
                            </Text>
                            <Text style={styles.TimeText}>
                                updated 5 mins ago
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.secondDetails}>
                        <View style={{ flexDirection: 'row', width: "100%", alignItems: 'center' }}>
                            <Text style={styles.TextBold}>
                                Contact information
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: "100%", alignItems: 'center' }}>
                            <Image style={{ width: 18, height: 18, marginHorizontal: 5 }} source={require('../../icons/phone.png')} />
                            <Text style={styles.Text}>
                                0817 4509 183
                            </Text>
                        </View>
                    </View>
                    <View style={styles.secondDetails}>
                        <View style={{ flexDirection: 'row', width: "100%", alignItems: 'center', marginBottom: 15 }}>
                            <Text style={styles.TextBold}>
                                Comments (4)
                            </Text>
                        </View>
                        <View style={{ width: '100%', minHeight: 300, backgroundColor: '#F4F4F4', borderRadius: 10, padding: 10 }}>
                            <View style={styles.commentItem}>
                                <View style={styles.carouselContainerExtraInfo}>
                                    <Image source={require('../../images/avatar.png')} style={{ width: 35, height: 35, borderRadius: 400, marginRight: 7 }} />
                                    <View style={styles.carouselContainerExtraInfoText}>
                                        <Text style={styles.stationText}>Leke Daniel</Text>
                                        <Text style={styles.stationLocation}>3 days ago</Text>
                                    </View>
                                </View>
                                <Text style={styles.Text}>
                                    Amazing customer service
                                </Text>
                            </View>
                            <View style={styles.commentItem}>
                                <View style={styles.carouselContainerExtraInfo}>
                                    <Image source={require('../../images/avatar.png')} style={{ width: 35, height: 35, borderRadius: 400, marginRight: 7 }} />
                                    <View style={styles.carouselContainerExtraInfoText}>
                                        <Text style={styles.stationText}>Leke Daniel</Text>
                                        <Text style={styles.stationLocation}>3 days ago</Text>
                                    </View>
                                </View>
                                <Text style={styles.Text}>
                                    Amazing customer service
                                </Text>
                            </View>
                            <View style={styles.commentItem}>
                                <View style={styles.carouselContainerExtraInfo}>
                                    <Image source={require('../../images/avatar.png')} style={{ width: 35, height: 35, borderRadius: 400, marginRight: 7 }} />
                                    <View style={styles.carouselContainerExtraInfoText}>
                                        <Text style={styles.stationText}>Leke Daniel</Text>
                                        <Text style={styles.stationLocation}>3 days ago</Text>
                                    </View>
                                </View>
                                <Text style={styles.Text}>
                                    Amazing customer service
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            {/* bottom sheet box share */}
            <BottomSheet
                isVisible={OptionBottomSheetVisible}
                onDismiss={closeBottomOption}
                snapPoints={['32%']}
            >
                <View style={styles.bottomSheetContent}>
                    <View style={styles.buttomsheetheader}>
                        <TouchableOpacity onPress={closeBottomOption}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/Icons.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.feedbackContainer}>
                        <TouchableOpacity onPress={openPriceOptionButton} style={{ flexDirection: 'row', width: "100%", alignItems: 'center', marginBottom: 30 }}>
                            <Image style={{ width: 22, height: 22, marginHorizontal: 10 }} source={require('../../icons/edit.png')} />
                            <Text style={styles.Text}>
                                Update Price
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', width: "100%", alignItems: 'center', marginBottom: 30 }}>
                            <Image style={{ width: 22, height: 22, marginHorizontal: 10 }} source={require('../../icons/uil_share.png')} />
                            <Text style={styles.Text}>
                                Share
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', width: "100%", alignItems: 'center', marginBottom: 10 }}>
                            <Image style={{ width: 22, height: 22, marginHorizontal: 10 }} source={require('../../icons/comment.png')} />
                            <Text style={styles.Text}>
                                Comment
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>

            {/* bottom sheet box price rating */}
            <BottomSheet
                isVisible={PriceBottomSheetVisible}
                onDismiss={closeBottomOption}
                snapPoints={['40%']}
            >
                <View style={styles.bottomSheetContent}>
                    <View style={styles.buttomsheetheader2}>
                        <Text style={styles.EditText}>Update Price</Text>
                        <TouchableOpacity onPress={closePriceOptionButton}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../images/Icons.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.feedbackContainer}>
                        <View style={styles.radioContainer}>
                            <View style={styles.radioOption}>
                                <RadioButton.Android
                                    value="option1"
                                    status={selectedOption === 'option1' ? 'checked' : 'unchecked'}
                                    onPress={() => setSelectedOption('option1')}
                                />
                                <Text>Option 1</Text>
                            </View>
                            <View style={styles.radioOption}>
                                <RadioButton.Android
                                    value="option2"
                                    status={selectedOption === 'option2' ? 'checked' : 'unchecked'}
                                    onPress={() => setSelectedOption('option2')}
                                />
                                <Text>Option 2</Text>
                            </View>
                            <View style={styles.radioOption}>
                                <RadioButton.Android
                                    value="option3"
                                    status={selectedOption === 'option3' ? 'checked' : 'unchecked'}
                                    onPress={() => setSelectedOption('option3')}
                                />
                                <Text>Option 3</Text>
                            </View>
                            <View style={styles.radioOption}>
                                <RadioButton.Android
                                    value="option4"
                                    status={selectedOption === 'option4' ? 'checked' : 'unchecked'}
                                    onPress={() => setSelectedOption('option4')}
                                />
                                <Text>Option 4</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate('SearchScreen')}>
                            <TextInput style={styles.searchInput} placeholder='Input Price Option' onFocus={() => navigation.navigate('SearchScreen')} ></TextInput>
                        </TouchableOpacity>
                    </View>
                </View>
            </BottomSheet>
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
        paddingLeft: "2.2%",
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#232323',
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
    EditText: {
        fontFamily: 'MulishBold',
        fontSize: 18,
        color: '#232323',
        marginRight: 10
    },
    Text_link: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#232323',
        textDecorationLine: 'underline'
    },
    TextBold: {
        fontFamily: 'SemiBold',
        fontSize: 18,
        color: '#232323',
    },
    TimeText: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#232323',
        position: 'absolute',
        right: 0
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
        width: 150,
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
        width: 157,
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
        marginBottom: 20
    },
    secondDetails: {
        width: '94%',
        minHeight: 90,
        borderBottomColor: '#D9D9D9',
        borderBottomWidth: 1,
        marginBottom: 20,
        justifyContent: 'space-around',
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
    commentItem: {
        width: '100%',
        minHeight: 80,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderColor: '#D1D1D147',
        marginBottom: 10
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
    buttomsheetheader2: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    feedbackContainer: {
        width: '100%',
        minHeight: 70,
        marginTop: 20,
        alignItems: 'center',
    },
    radioContainer: {
        flexDirection: 'row', // Place radio options horizontally
        alignItems: 'center', // Align items vertically within the container
        paddingLeft: 2,
        marginRight: 6, // Adjust the spacing between radio options as needed
    },
    radioOption: {
        flexDirection: 'row', // Align radio button and text horizontally
        alignItems: 'center', // Align items vertically within each option
        marginRight: 10, // Adjust the spacing between radio options as needed
    },
})










