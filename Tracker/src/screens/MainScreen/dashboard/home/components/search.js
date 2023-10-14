import { TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from '../styles/homeStyles';


export const SearchBox = ({ navigation, setModal }) => (
    <TouchableOpacity
      style={styles.searchContainer}
      onPress={() => navigation.navigate('SearchScreen')}
    >
      <Image
        source={require('../../../../../icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder='Search'
        onFocus={() => navigation.navigate('SearchScreen')}
      />
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => setModal(true)}
      >
        <Image
          source={require('../../../../../icons/filter.png')}
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  