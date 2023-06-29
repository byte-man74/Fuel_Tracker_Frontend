import OnboardingNavigator from './src/navigations/OnboardingNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthenticationNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo';
import MainScreenTab from './src/navigations/MainScreen';
import SearchScreen from './src/screens/MainScreen/dashboard/searchScreen';
import FuelStationDetails from './src/screens/others/fuelStationDetails';
import StationList from './src/screens/others/stationList';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import NotificationScreen from './src/screens/others/notification';



const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "CustomFontRegular": require('./assets/fonts/Mulish-Black.ttf'),
    "MulishBold": require('./assets/fonts/Mulish-Bold.ttf'),
    "Regular": require('./assets/fonts/Mulish-Regular.ttf'),
    "SemiBold": require('./assets/fonts/Mulish-SemiBold.ttf')
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
      <BottomSheetModalProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>          
          <Stack.Screen name="MainScreen" component={MainScreenTab} />
          <Stack.Screen name="Authentication" component={AuthNavigator} /> 
          <Stack.Screen name="FuelStationDetails" component={FuelStationDetails} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingNavigator} />    
          <Stack.Screen name="Notification" component={NotificationScreen} />   
        </Stack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
}

