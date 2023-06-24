import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'

const { height, width } = Dimensions.get('window');

const FuelStationDetails = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.backgroundImage}>
                <ImageBackground source={require('../../images/backgrnd.png')} style={styles.fullBackground}>
                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Image style={{ width: 32, height: 30}} source={require('../../icons/back.png')}/>  
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={{ width: 30, height: 30 }} source={require('../../icons/options.png')} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
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
        height: height * 0.25,
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
    }
})










