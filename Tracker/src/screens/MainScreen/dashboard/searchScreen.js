import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('window');


const SearchScreen = () => {
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
        </View>
      </ScrollView>
    </>

  )
}


export default SearchScreen

const styles = StyleSheet.create({
  headerBox: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    paddingHorizontal: '4%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minHeight: 90
  },
  homeContainerHeader: {
    width: "100%",
    height: 50,
    top: 30,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'red'
  },
  mainBox: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    minHeight: height * 1.6,
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
    fontFamily: 'SemiBold',
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
})