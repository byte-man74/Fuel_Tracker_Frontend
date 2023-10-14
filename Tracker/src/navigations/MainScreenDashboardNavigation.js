import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/MainScreen/dashboard/home/home';
import SearchScreen from '../screens/MainScreen/dashboard/searchScreen';
import ViewStationDetails from '../screens/MainScreen/dashboard/viewStationDetailsScreen';

const Stack = createStackNavigator();

function MainDashboardNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default MainDashboardNavigator