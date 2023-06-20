import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/OnboardingScreen/welcome';
import SignUp from '../screens/OnboardingScreen/signup';


const Stack = createStackNavigator();

function OnboardingNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}
export default OnboardingNavigator