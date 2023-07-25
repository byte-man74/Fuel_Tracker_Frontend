import OnboardingNavigator from "./src/navigations/OnboardingNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigations/AuthenticationNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { useCallback, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo";
import MainScreenTab from "./src/navigations/MainScreen";
import SearchScreen from "./src/screens/MainScreen/dashboard/searchScreen";
import FuelStationDetails from "./src/screens/others/fuelStationDetails";
import StationList from "./src/screens/others/stationList";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import NotificationScreen from "./src/screens/others/notification";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Permission from "./src/screens/OnboardingScreen/permission";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoNetworkScreen from "./src/screens/others/noNetwork";
import ServerScreen from "./src/screens/others/serverError";

const Stack = createStackNavigator();

export default function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    (async () => {
      // Check if token exists in AsyncStorage
      const userToken = await AsyncStorage.getItem("userAccessToken");
      if (userToken) {
        setToken(userToken);
      }
    })();
  }, []);
  const [fontsLoaded] = useFonts({
    CustomFontRegular: require("./assets/fonts/Mulish-Black.ttf"),
    MulishBold: require("./assets/fonts/Mulish-Bold.ttf"),
    Regular: require("./assets/fonts/Mulish-Regular.ttf"),
    SemiBold: require("./assets/fonts/Mulish-SemiBold.ttf"),
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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {token ? (
              // If token exists, navigate to MainScreen
              <></>
            ) : (
              // If token doesn't exist, navigate to Onboarding
              <>
                <Stack.Screen
                  name="Onboarding"
                  component={OnboardingNavigator}
                />
              </>
            )}
            <Stack.Screen name="MainScreen" component={MainScreenTab} />
            <Stack.Screen
              name="FuelStationDetails"
              component={FuelStationDetails}
            />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="StationList" component={StationList} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            <Stack.Screen name="Authentication" component={AuthNavigator} />
            <Stack.Screen name="ServerScreen" component={ServerScreen} />
            <Stack.Screen name="Permissions" component={Permission} />
            <Stack.Screen name="NoNetwork" component={NoNetworkScreen} />
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
