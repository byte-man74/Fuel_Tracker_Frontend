import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('window');

const HomeScreen = () => {
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
                    <TouchableOpacity style={styles.notificationBox}>
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
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.headerlink}>
                                Map view
                            </Text>
                            <Image style={{ width: 24, height: 24, marginLeft: 2 }} source={require('../../../icons/switch.png')} />
                        </TouchableOpacity>
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
        top: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        flexGrow: 1,
        backgroundColor: 'white'
    },
    mainBox: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        minHeight: height * 1.1,
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
        fontFamily: 'MulishBold',
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
    }
})