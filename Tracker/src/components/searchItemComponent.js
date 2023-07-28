import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

const yodata = [
    { id: 1, coverImage: require('../../assets/image1.jpg'), logo: require('../../assets/shell.png'), name: 'Ooando Station', location: "Lekki Phase 1, Lagos.", price: "₦260", time_posted: "3 days ago" },
    // Add more data items as needed
];

const SearchItemComponent = ({ navigation, data, loading}) => {


    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.stationDetails}>
                <Image source={yodata[0].logo} style={styles.stationImage} />
                <View style={{ justifyContent: 'space-between', height: '100%' }}>
                    <Text style={styles.stationText}>{item.name}</Text>
                    <Text style={styles.stationLocation}>{item.address}</Text>
                    <Text style={styles.stationLocation}> <Text style={{ fontFamily: 'MulishBold'}}>{item.amount}</Text> | {item.time_posted}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Image
                    source={require('../icons/search.png')}
                    style={{ width: 28, height: 28, position: 'absolute', top: '22.5%', left: '3%' }}
                />
                <TextInput style={styles.searchInput} placeholder='Search' />
                <TouchableOpacity
                    style={{ position: 'absolute', top: '22.5%', right: '3%' }}
                    onPress={() => navigation.navigate('SearchScreen')}
                >
                    <Image source={require('../icons/filter.png')} style={{ width: 28, height: 28 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.nearbyFuelingStationContainer}>
                <View style={styles.nearbyFuelingStationContainerHeader}>
                    <Text style={styles.headerTitle}>Fueling stations near you</Text>
                    <TouchableOpacity style={styles.headerLinkContainer} onPress={() => navigation.navigate('MainScreen')}>
                        <Text style={styles.headerLink}>Grid view</Text>
                        <Image style={styles.headerLinkIcon} source={require('../icons/switch.png')} />
                    </TouchableOpacity>
                </View>
                {loading ? (
                    <View style={styles.loadingContainer} >
                        <ActivityIndicator size="large" color="orange" />
                    </View>
                    
                ): (
                    <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    />
                )
                }
            </View>
        </View>
    );
};

export default SearchItemComponent;

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
