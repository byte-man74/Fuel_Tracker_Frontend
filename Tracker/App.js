import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingNavigator from './src/navigations/OnboardingNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthenticationNavigator';


export default function App() {
  return (
    <NavigationContainer >
      {/* <OnboardingNavigator /> */}
      <AuthNavigator />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 