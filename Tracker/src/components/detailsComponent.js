import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

const yodata = [
    { id: 1, coverImage: require('../../assets/image1.jpg'), logo: require('../../assets/shell.png'), name: 'Ooando Station', location: "Lekki Phase 1, Lagos.", price: "₦260", time_posted: "3 days ago" },
    // Add more data items as needed
];

const DetailsComponent = ({ navigation, data}) => {

    return (
        <View style={styles.container}>
            <View style={styles.nearbyFuelingStationContainer}>
                <View style={styles.nearbyFuelingStationContainerHeader}>
                    <Text style={styles.headerTitle}>{data.name}</Text>
                    <TouchableOpacity style={styles.headerLinkContainer} onPress={() => navigation.navigate('MainScreen')}>
                        <Text style={styles.headerLink}>Grid view</Text>
                        <Image style={styles.headerLinkIcon} source={require('../icons/switch.png')} />
                    </TouchableOpacity>
                </View>
                    <View style={styles.loadingContainer} >
                        <ActivityIndicator size="large" color="orange" />
                    </View>
            </View>
        </View>
    );
};

export default DetailsComponent;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '4%',
    },
    searchContainer: {
        width: '100%',
        height: 50,
        marginTop: 5,
        marginBottom: 20,
    },
    searchInput: {
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 8,
        paddingLeft: '13.2%',
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#232323',
    },
    nearbyFuelingStationContainer: {
        width: '100%',
        minHeight: 30,
        paddingBottom: 280,
    },
    nearbyFuelingStationContainerHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerTitle: {
        fontFamily: 'MulishBold',
        fontSize: 16,
        color: '#232323',
    },
    headerLinkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLink: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#2F80ED',
        marginRight: 2,
    },
    headerLinkIcon: {
        width: 24,
        height: 24,
    },
    itemContainer: {
        width: '100%',
        height: 100,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        flexDirection: 'row'
    },
    stationDetails: {
        width: '60%',
        height: '100%',
        flexDirection: 'row',
    },
    stationImage: {
        width: 50,
        height: 50,
        borderRadius: "50%",
        marginRight: 10
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
    loadingContainer: {
        width: "100%",
        height: "100%",
        paddingTop: 40
    }
});
