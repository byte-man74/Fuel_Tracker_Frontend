import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingNavigator from './src/navigations/OnboardingNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthenticationNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import { Font } from 'expo-font'; // If using Expo

// Function to load custom fonts
const loadFonts = async () => {
  await Font.loadAsync({
    'CustomFontRegular': require('./assets/fonts/CustomFont-Regular.ttf'),
    'CustomFontBold': require('./assets/fonts/CustomFont-Bold.ttf'),
  });
};

// Call the loadFonts function before rendering the app
loadFonts().then(() => {
  // Render the app
  AppRegistry.registerComponent('Tracker', () => App); // Replace 'MyApp' with your app name
});



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        <Stack.Screen name="Authentication" component={AuthNavigator} />
      </Stack.Navigator>
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
 