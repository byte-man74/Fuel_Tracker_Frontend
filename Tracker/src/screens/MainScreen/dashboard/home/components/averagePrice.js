import { View, Text, Image } from 'react-native';
import { styles } from '../styles/homeStyles';

export const AveragePrice = () => (
    <View style={styles.averagePriceBox}>
      <View style={styles.averagePriceBoxContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.priceText}>₦---</Text>
          <Image
            style={{ width: 24, height: 24, marginLeft: 2 }}
            source={require('../../../../../icons/gas.png')}
          />
        </View>
        <Text style={styles.headerText}>Average fuel price near you</Text>
      </View>
    </View>
  );
  