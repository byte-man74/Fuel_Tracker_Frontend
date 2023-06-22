import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/MainScreen/dashboard/home';
import SearchScreen from '../screens/MainScreen/dashboard/searchScreen';
import ViewStationDetails from '../screens/MainScreen/dashboard/viewStationDetailsScreen';

const Stack = createStackNavigator();

function MainDashboardNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ViewStation" component={ViewStationDetails} />
        </Stack.Navigator>
    );
}

export default MainDashboardNavigator