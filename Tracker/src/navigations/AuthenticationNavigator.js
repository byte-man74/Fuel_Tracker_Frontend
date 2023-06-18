import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/AuthenticationScreen/login';
import SignUp from '../screens/AuthenticationScreen/signup';
import OtpVerification from '../screens/AuthenticationScreen/otpverification';
import ForgottenPassword from '../screens/AuthenticationScreen/forgotPassword';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />
            <Stack.Screen name="ForgottenPassword" component={ForgottenPassword} />
        </Stack.Navigator>
    );
}
export default AuthNavigator