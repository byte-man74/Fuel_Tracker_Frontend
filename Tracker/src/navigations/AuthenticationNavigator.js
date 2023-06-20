import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/AuthenticationScreen/login';
import SignUp from '../screens/AuthenticationScreen/signup';
import OtpVerification from '../screens/AuthenticationScreen/otpverification';
import ForgottenPassword from '../screens/AuthenticationScreen/forgotPassword';
import ResetPasswordOTP from '../screens/AuthenticationScreen/resetPasswordOtpVerification';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
            <Stack.Screen name="ForgottenPassword" component={ForgottenPassword} />
            <Stack.Screen name="ResetPasswordOtp" component={ResetPasswordOTP} />
        </Stack.Navigator>
    );
}
export default AuthNavigator