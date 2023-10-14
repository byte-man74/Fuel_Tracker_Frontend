import { View, Text, TouchableOpacity } from "react-native";
import SliderSaved from "../../../../../components/verticalSlider";
import { styles } from "../styles/homeStyles";


export const SavedStationsSection = ({ navigation }) => (
    <View style={[styles.nearbyFuelingStationContainer, { marginBottom: 0 }]}>
      <View style={styles.nearbyFuelingStationContainerHeader}>
        <Text style={styles.haaderTitle}>Saved fueling stations</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Saved')}>
          <Text style={styles.headerText}>view all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.carouselBox}>
        <SliderSaved navigation={navigation} />
      </View>
    </View>
  );
  