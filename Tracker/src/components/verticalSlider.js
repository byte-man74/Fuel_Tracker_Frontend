import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.68;

const Slider = ({ navigation }) => {
    const data = [
        { id: 1, coverImage: require('../../assets/image1.jpg'), logo: require('../../assets/shell.jpg'), name: 'Ooando Station', location: "Lekki Phase 1, Lagos.", price: "₦260" },
        { id: 2, coverImage: require('../../assets/image2.jpg'), logo: require('../../assets/nnpc.png'), name: 'NNPC', location: "wuse zone 3", price: "₦300" },
        { id: 3, coverImage: require('../../assets/image3.jpg'), logo: require('../../assets/chevron.png'), name: 'Chevron', location: "Kuje zone 3", price: "300" },
        { id: 4, coverImage: require('../../assets/image1.jpg'), logo: require('../../assets/shell.jpg'), name: 'Ooando Station', location: "Lekki Phase 1, Lagos.", price: "₦260" },
        { id: 5, coverImage: require('../../assets/image2.jpg'), logo: require('../../assets/nnpc.png'), name: 'NNPC', location: "wuse zone 3", price: "₦300" },
        { id: 6, coverImage: require('../../assets/image3.jpg'), logo: require('../../assets/chevron.png'), name: 'Chevron', location: "wuse zone 3", price: "300" },
        // Add more data items as needed
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('FuelStationDetails')} style={styles.itemContainer}>
                <Image source={item.coverImage} style={styles.image} />
                <View style={styles.carouselContainer}>
                    <View style={styles.carouselContainerExtraInfo}>
                        <Image source={item.logo} style={{ width: 35, height: 35, borderRadius: 400, marginRight: 7 }} />
                        <View style={styles.carouselContainerExtraInfoText}>
                            <Text style={styles.stationText}>{ item.name}</Text>
                            <Text style={styles.stationLocation}>{item.location}</Text>
                        </View>
                        <View
                            style={{ position: 'absolute', top: '19.5%', right: 0 }}
                        ><Text style={{ fontFamily: 'MulishBold', fontSize: 18, }}>₦540</Text>
                        </View>
                    </View>
                    <View style={styles.extraFunctionsStyling}>
                        <View style={{ width: "100%", height: "100%", flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.trafficIndicator}>
                                <Image source={require('../icons/traffic.png')} style={{ width: 24, height: 24, marginRight: 5 }} />
                                <Text style={{ fontFamily: 'Regular', fontSize: 14, color: 'white' }}>Traffic</Text>  
                            </View>
                            <TouchableOpacity style={styles.upvoteButton}>
                                <Image source={require('../icons/upvote.png')} style={{ width: 24, height: 24, marginRight: 5 }} />
                                <Text style={{ fontFamily: 'Regular', fontSize: 14 }}>Upvote | 24</Text>                    
                            </TouchableOpacity>
                            <Image source={require('../icons/share.png')} style={{ width: 43.95, height: "90%", marginRight: 5, objectFit: 'contain' }} />
                        </View>
                    </View>
                    <View style={styles.lastUpdatedPrice}>
                        <Text style={{ fontFamily: 'Regular', fontSize: 16, color: '#333333'}}>Last updated 30mins ago </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.sliderContainer}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContentContainer}
                snapToInterval={ITEM_WIDTH}
                decelerationRate="fast"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sliderContainer: {
        width: '100%',
// Assuming square items, adjust as per your requirements
    },
    flatListContentContainer: {
        
    },
    itemContainer: {
        width: ITEM_WIDTH,
         // Assuming square items, adjust as per your requirements
        marginRight: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 170,
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    carouselContainer: {
        flex: 1,
        width: '100%',
        height: 145,

    },
    carouselContainerExtraInfo: {
        width: '100%',
        top: 10,
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
    extraFunctionsStyling: {
        width: '100%',
        height: 35,
        marginTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
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
    lastUpdatedPrice:
    {
        justifyContent: 'flex-end',
        width: "100%",
        height: 35,
    }
});

export default Slider;
