import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

const SearchItemComponent = ({ navigation }) => {
  const data = Array.from(Array(50), (_, index) => ({
    id: String(index + 1),
    name: `Item ${index + 1}`,
  }));

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text>{item.name}</Text>
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
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
    marginBottom: 40,
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
});
