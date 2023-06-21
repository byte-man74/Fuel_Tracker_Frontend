import OnboardingNavigator from './src/navigations/OnboardingNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthenticationNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo';
import MainScreenTab from './src/navigations/MainScreen';





const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "CustomFontRegular": require('./assets/fonts/Mulish-Black.ttf'),
    "MulishBold": require('./assets/fonts/Mulish-Bold.ttf'),
    "Regular": require('./assets/fonts/Mulish-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainScreen" component={MainScreenTab} />
        <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
        <Stack.Screen name="Authentication" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

