import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainDashboardNavigator from './MainScreenDashboardNavigation';
import SavedScreen from '../screens/MainScreen/bookmark/savedScreen';
import SettingsScreen from '../screens/MainScreen/settings/settings';
import { Image } from 'react-native';
// will add a search screen here 
const TabArr = [
    { route: 'Home', label: 'Home', activeIcon: '../../icons/home_active.png', inActiveIcon: '../../icons/home.png', component: MainDashboardNavigator },
    { route: 'Saved', label: 'Like', activeIcon: '../../icons/bookmark_active.png', inActiveIcon: '../../icons/bookmark.png', component: SavedScreen },
    { route: 'Settings', label: 'Search', activeIcon: '../../icons/settings.png', inActiveIcon: '../../icons/settings.png', component: SettingsScreen },
];

const Tab = createBottomTabNavigator();

function MainScreenTab() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 60,
                position: 'absolute',
                bottom: 16,
                right: 16,
                left: 16,
                borderRadius: 30
            }
        }}>
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen key={index} name={item.route} component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarLabel: item.label,
                            tabBarIcon: ({ color, focused }) => (
                                <Image
                                />
                            )
                        }}
                    />
                )
            })}
            {/* <Tab.Screen name="DashboardStack" component={MainDashboardNavigator} />
            <Tab.Screen name="Saved" component={SavedScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}

export default MainScreenTab 


