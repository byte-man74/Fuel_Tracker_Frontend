import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainDashboardNavigator from './MainScreenDashboardNavigation';
import SearchScreen from '../screens/MainScreen/dashboard/searchScreen';
import SavedScreen from '../screens/MainScreen/bookmark/savedScreen';
import SettingsScreen from '../screens/MainScreen/settings/settings';


const Tab = createBottomTabNavigator();

function MainScreenTab() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="DashboardStack" component={MainDashboardNavigator} />
            <Tab.Screen name="Saved" component={SavedScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default MainScreenTab 


