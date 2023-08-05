import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo";

export default function FontLoader({ children }) {
  const [fontsLoaded] = useFonts({
    CustomFontRegular: require("./assets/fonts/Mulish-Black.ttf"),
    MulishBold: require("./assets/fonts/Mulish-Bold.ttf"),
    Regular: require("./assets/fonts/Mulish-Regular.ttf"),
    SemiBold: require("./assets/fonts/Mulish-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();
  return children;
}
