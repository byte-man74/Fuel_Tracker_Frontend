import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const MapsComponent = () => {
  return (
      <View style={styles.headerBox}>
          <View style={styles.homeContainerHeader}>
              <View style={styles.avatarWithName}>
                  <Image
                      source={require('../images/avatar.png')}
                      style={styles.avatarStyling}
                      resizeMode="contain"
                  />
                  <Text style={styles.haaderTitle}>Hello Justice👋</Text>
              </View>
              <TouchableOpacity style={styles.notificationBox}>
                  <Image
                      source={require('../icons/notifiction_active.png')}
                      style={styles.iconStyling}
                  />
              </TouchableOpacity>
          </View>
      </View>
  )
}

export default MapsComponent

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
    iconStyling: {
        width: 28,
        height: 28
    },
    haaderTitle: {
        fontFamily: 'SemiBold',
        fontSize: 18,
        color: '#232323',
    },
    headerText: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#232323',
    },
})