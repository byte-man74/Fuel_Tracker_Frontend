import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AsyncStorageTokenCheck({ setToken }) {
  useEffect(() => {
    (async () => {
      const userToken = await AsyncStorage.getItem("userAccessToken");
      if (userToken) {
        setToken(userToken);
      }
    })();
  }, [setToken]);

  return null;
}
