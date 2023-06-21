import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainDashboardNavigator from './MainScreenDashboardNavigation';


const Tab = createBottomTabNavigator();

function DashboardBottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="DashboardStack" component={MainDashboardNavigator} />
            <Tab.Screen name="Search" component={SettingsScreen} />
            <Tab.Screen name="Saved" component={SettingsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}