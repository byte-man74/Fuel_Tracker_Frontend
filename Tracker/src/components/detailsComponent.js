import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';


const DetailsComponent = ({ navigation, data}) => {

    return (
        <View style={styles.container}>
            <View style={styles.nearbyFuelingStationContainer}>
                <View style={styles.nearbyFuelingStationContainerHeader}>
                    <Text style={styles.headerTitle}>{data.name}</Text>
                    <TouchableOpacity style={styles.headerLinkContainer} onPress={() => navigation.navigate('MainScreen')}>
                        <Text style={styles.headerLink}>Go back</Text>
                        <Image style={styles.headerLinkIcon} source={require('../icons/switch.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: "center"}}>
                    <View style={styles.secondDetails}>
                        <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "center",
                        }}
                        >
                        <Text style={styles.TextBold}>Fuel Price / Liter (₦)</Text>
                        <View
                            style={{
                            width: 180,
                            height: 30,
                            backgroundColor: "#F6CA63",
                            marginLeft: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 8,
                            }}
                        >
                            <Text style={styles.Text}>{data.votes} users approved 👍🏾</Text>
                        </View>
                        </View>
                        <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "center",
                        }}
                        >

                            <Text style={styles.EditText}>₦{data.price}L</Text>
                        <Text style={styles.TimeText}>{data.time_posted}</Text>
                        </View>
                    </View>
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
        borderRadius: 400,
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
        paddingTop: 0
    },
    secondDetails: {
        width: "94%",
        minHeight: 90,
        borderBottomColor: "#D9D9D9",
        borderBottomWidth: 1,
        marginBottom: 20,
        justifyContent: "space-around",
      },
      TextBold: {
        fontFamily: "SemiBold",
        fontSize: 18,
        color: "#232323",
      },
      Text: {
        fontFamily: "Regular",
        fontSize: 16,
        color: "#232323",
      },
      TimeText: {
        fontFamily: "Regular",
        fontSize: 16,
        color: "#232323",
        position: "absolute",
        right: 0,
      },
      EditText: {
        fontFamily: "MulishBold",
        fontSize: 18,
        color: "#232323",
        marginRight: 10,
      },
});
