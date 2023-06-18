import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/OnboardingScreen/welcome';


const Stack = createStackNavigator();

function OnboardingNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
    );
}
export default OnboardingNavigator