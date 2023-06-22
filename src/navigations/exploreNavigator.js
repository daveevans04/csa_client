import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Profile from '../screens/profile';

const Stack = createStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Notes"
        component={Notes}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default ExploreStack;
