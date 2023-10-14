import { View, Image, Text } from 'react-native';
import { styles } from '../styles/homeStyles';


export const Avatar = () => (
    <View style={styles.avatarWithName}>
      <Image
        source={require('../../../../../images/avatar.png')}
        style={styles.avatarStyling}
        resizeMode="contain"
      />
      <Text style={styles.headerTitle}>Hello👋</Text>
    </View>
  );
  