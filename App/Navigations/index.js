import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
import Dashboard from "containers/Dashboard";
import DeviceDetail from "containers/DeviceDetail";
import utils from "./utils";
import Routes from "utils/Routes";
import { Colors } from "configs";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={Colors.Transparent}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            ...utils.screenOptions,
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={Routes.Dashboard}
            component={Dashboard}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name={Routes.DeviceDetail}
            component={DeviceDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  )
}

export default AppNavigation;
