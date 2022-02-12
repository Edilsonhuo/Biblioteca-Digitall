import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Cadastro from '../screens/Cadastro';
import Login from '../screens/Login';
import SenhaEsquece from "../screens/SenhaEsquece";
import MainTab from '../stacks/MainTab'; 
// import Drawer from "../stacks/Drawer";

const Stack = createStackNavigator();

export default () => { 
    return (
      <Stack.Navigator
        initialRouteName=" Preload"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={{title: 'Preload'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{title: 'Cadastro'}}
        />
        <Stack.Screen
          name="SenhaEsquece"
          component={SenhaEsquece}
          options={{title: 'SenhaEsquece'}}
        />
        <Stack.Screen name="MainTab" component={MainTab} />
        {/* <Stack.Screen name="Drawer" component={Drawer} /> */}
      </Stack.Navigator>
    );
}