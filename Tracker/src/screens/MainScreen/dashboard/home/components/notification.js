import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { styles } from '../styles/homeStyles';



export const NotificationIcon = ({ navigation }) => (
    <TouchableOpacity
      style={styles.notificationBox}
      onPress={() => navigation.navigate('Notification')}
    >
      <Image
        source={require('../../../../../icons/notifiction_active.png')}
        style={styles.iconStyling}
      />
    </TouchableOpacity>
  );
  