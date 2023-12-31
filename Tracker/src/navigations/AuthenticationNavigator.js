import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/AuthenticationScreen/login';
import ForgottenPassword from '../screens/AuthenticationScreen/forgotPassword';
import ResetPasswordOTP from '../screens/AuthenticationScreen/resetPasswordOtpVerification';
import PasswordReset from '../screens/AuthenticationScreen/resetPasssword';

const Stack = createStackNavigator();

function AuthNavigator(props) {

    const { successMessage } = props.route.params ? props.route.params : { successMessage: false };


    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} initialParams={{ successMessage: successMessage }}  />
            <Stack.Screen name="ForgottenPassword" component={ForgottenPassword} />
            <Stack.Screen name="ResetPasswordOtp" component={ResetPasswordOTP} />
            <Stack.Screen name="PasswordReset" component={PasswordReset} />
        </Stack.Navigator>
    );
}
export default AuthNavigator