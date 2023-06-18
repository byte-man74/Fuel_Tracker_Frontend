import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingNavigator from './src/navigations/OnboardingNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthenticationNavigator';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator headerMode="none">
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
 