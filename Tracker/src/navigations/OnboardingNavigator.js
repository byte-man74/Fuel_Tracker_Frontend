import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/OnboardingScreen/welcome';
import SignUp from '../screens/OnboardingScreen/signup';
import OtpVerification from '../screens/OnboardingScreen/otpverification';
import TermsAndConditions from '../screens/OnboardingScreen/termsAndCondition';

const Stack = createStackNavigator();

function OnboardingNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
            <Stack.Screen name="TermsAndCondition" component={TermsAndConditions} />
        </Stack.Navigator>
    );
}
export default OnboardingNavigator