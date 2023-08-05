/* 
This code sets up a bottom tab navigation for your main screen using the @react-navigation/bottom-tabs package. 
It defines an array of tab configurations, each containing a route name, label, icons for active and inactive states, 
and the associated component to be displayed when the tab is selected. 
The MainScreenTab function creates the actual tab navigator and sets up the tab bar appearance and behavior.
*/

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainDashboardNavigator from './MainScreenDashboardNavigation';
import SavedScreen from '../screens/MainScreen/bookmark/savedScreen';
import SettingsScreen from '../screens/MainScreen/settings/settings';
import SearchScreen from '../screens/MainScreen/dashboard/searchScreen';

// Array of tab configurations
const TabArr = [
  {
    route: 'Dashboard',
    label: 'Home',
    activeIcon: require('../icons/home_active.png'),
    inActiveIcon: require('../icons/home.png'),
    component: MainDashboardNavigator,
  },
  {
    route: 'Maps',
    label: 'Map',
    activeIcon: require('../icons/maps_active.png'),
    inActiveIcon: require('../icons/maps.png'),
    component: SearchScreen,
  },
  {
    route: 'Saved',
    label: 'Saved',
    activeIcon: require('../icons/bookmark_active.png'),
    inActiveIcon: require('../icons/bookmark.png'),
    component: SavedScreen,
  },
  {
    route: 'Settings',
    label: 'Settings',
    activeIcon: require('../icons/settings_active.png'),
    inActiveIcon: require('../icons/settings.png'),
    component: SettingsScreen,
  },
];

const Tab = createBottomTabNavigator();

function MainScreenTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          backgroundColor: 'black',
          borderRadius: 30,
          paddingBottom: 0,
        },
      }}
    >
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: item.label,
            tabBarIcon: ({ color, focused }) => (
              <Image
                source={focused ? item.activeIcon : item.inActiveIcon}
                style={styles.buttonImage}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default MainScreenTab;

const styles = StyleSheet.create({
  buttonImage: {
    width: 24,
    height: 24,
  },
});
