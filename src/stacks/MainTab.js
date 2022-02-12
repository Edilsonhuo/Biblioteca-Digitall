import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import home from '../screens/home';
import perfil from '../screens/perfil';
import offline from '../screens/offline';
import search from '../screens/search';
// import notification from '../screens/Profile/notification';
import notification from '../screens/notification';
import BookDetail from './BookDetail';

import detatlheLivro from '../screens/detatlheLivro';



// import Drawer from '../stacks/Drawer';

const Tab = createBottomTabNavigator();

export default () => {
    return (
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="home" component={home} />
        <Tab.Screen name="perfil" component={perfil} />
        <Tab.Screen name="offline" component={offline} />
        {<Tab.Screen name="search" component={search} />}
        <Tab.Screen name="notification" component={notification} />
        {/* <Tab.Screen name="Drawer" component={Drawer} /> */}
        <Tab.Screen name="BookDetail" component={BookDetail} />
        <Tab.Screen name="detatlheLivro" component={detatlheLivro} />
      </Tab.Navigator>
    );
}