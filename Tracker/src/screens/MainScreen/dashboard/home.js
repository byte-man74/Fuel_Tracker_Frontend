import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
      <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.mainBox}>
              <View style={styles.homeContainerHeader}>
                  <View style={styles.avatarWithName}>
                      
                  </View>
                  <View style={styles.notificationBox}>
                      
                  </View>
              </View>
          </View>
      </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    mainBox: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-start',
        minHeight: height * 1.1,
        paddingHorizontal: '4%'
    },
    homeContainerHeader: {
        width: "100%",
        height: 60,
        backgroundColor: 'red',
        top: 60,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatarWithName: {
        width: '65%',
        height: '100%',
        backgroundColor: 'blue'
    },
    notificationBox: {
        width: '20%',
        height: '100%',
        backgroundColor: 'green'
    }
})