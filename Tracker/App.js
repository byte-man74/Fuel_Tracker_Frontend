import OnboardingNavigator from './src/navigations/OnboardingNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthenticationNavigator';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD

import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';





const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "CustomFontRegular": require('./assets/fonts/Mulish-Black.ttf'),
    "CustomFontBold": require('./assets/fonts/Mulish-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


=======
import { useFonts } from 'expo-font';

const loadFonts = () => {
  return useFonts({
    CustomFontRegular: require('./assets/fonts/Mulish-Black.ttf'),
    CustomFontBold: require('./assets/fonts/Mulish-Bold.ttf'),
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = loadFonts();

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

>>>>>>> 88afcfd8b917e7cfed0d104b5e775bc562192912
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        <Stack.Screen name="Authentication" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

<<<<<<< HEAD
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 88afcfd8b917e7cfed0d104b5e775bc562192912
