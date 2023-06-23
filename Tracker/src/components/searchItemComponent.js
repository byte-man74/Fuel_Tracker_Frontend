import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchItemComponent = ({ navigation }) => {
  return (
      <View style={styles.container}>
          <View style={styles.searchContainer}>
              <Image
                  source={require('../icons/search.png')}
                  style={{ width: 28, height: 28, position: 'absolute', top: "22.5%", left: "3%" }} />
              <TextInput style={styles.searchInput} placeholder='Search' ></TextInput>
              <TouchableOpacity style={{ position: 'absolute', top: "22.5%", right: "3%" }} onPress={() => navigation.navigate('SearchScreen')}>
                  <Image
                      source={require('../icons/filter.png')}
                      style={{ width: 28, height: 28, }}
                  />
              </TouchableOpacity>
          </View>
          <View style={styles.nearbyFuelingStationContainer}>
              <View style={styles.nearbyFuelingStationContainerHeader}>
                  <Text style={styles.haaderTitle}>Fueling stations near you</Text>
                  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate('MainScreen')}>
                      <Text style={styles.headerlink}>
                          Grid view
                      </Text>
                      <Image style={{ width: 24, height: 24, marginLeft: 2 }} source={require('../icons/switch.png')} />
                  </TouchableOpacity>
              </View>
          </View>
    </View>
  )
}

export default SearchItemComponent

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '4%'
    },
    searchContainer: {
        width: '100%',
        height: 50,
        marginTop: 5,
        marginBottom: 20
    },
    searchInput: {
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ABABAB',
        borderRadius: 8,
        paddingLeft: "13.2%",
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#232323',
    },
    nearbyFuelingStationContainer: {
        width: '100%',
        minHeight: 30,
        marginBottom: 40
    },
    nearbyFuelingStationContainerHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    haaderTitle: {
        fontFamily: 'MulishBold',
        fontSize: 16,
        color: '#232323',
    },
    headerlink: {
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#2F80ED',
    },
})