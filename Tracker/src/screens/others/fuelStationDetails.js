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
                    <Image style={styles.stationImage} source={require('../../../assets/image1.jpg')} />
                    <View style={styles.stationDetailsTextContainer}></View>
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
        minHeight: height * 1.1
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
        height: 150,
        marginTop: -40,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#D1D1D147',
        marginRight: 10,
    },
    stationDetailsTextContainer: {
        width: '48.5%',
        height: '87%',
        alignSelf: 'center',
        backgroundColor: 'red'
    }
})










