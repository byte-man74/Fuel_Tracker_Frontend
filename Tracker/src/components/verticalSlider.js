import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.68;

const Slider = () => {
    const data = [
        { id: 1, coverImage: require('../../assets/image1.jpg'), name: 'Ooando Station', location: "Lekki Phase 1, Lagos.", price: "300" },
        { id: 2, coverImage: require('../../assets/image2.png'), name: 'Item 2', location: "wuse zone 3", price: "300" },
        { id: 3, coverImage: require('../../assets/image3.png'), name: 'Item 3', location: "wuse zone 3", price: "300" },
        { id: 4, coverImage: require('../../assets/image1.png'), name: 'Item 1', location: "wuse zone 3", price: "300" },
        { id: 5, coverImage: require('../../assets/image2.png'), name: 'Item 2', location: "wuse zone 3", price: "300" },
        { id: 6, coverImage: require('../../assets/image3.png'), name: 'Item 3', location: "wuse zone 3", price: "300" },
        // Add more data items as needed
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => console.log('Item pressed')} style={styles.itemContainer}>
                <Image source={item.coverImage} style={styles.image} />
                <View style={styles.carouselContainer}>
                    <View style={styles.carouselContainerExtraInfo}>
                        <Image source={require('../../assets/shell.jpg')} style={{ width: 35, height: 35, borderRadius: 400, marginRight: 7 }} />
                        <View style={styles.carouselContainerExtraInfoText}>
                            <Text style={styles.stationText}>{ item.name}</Text>
                            <Text style={styles.stationLocation}>{item.location}</Text>
                        </View>
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
        height: 120,

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
    }
});

export default Slider;
