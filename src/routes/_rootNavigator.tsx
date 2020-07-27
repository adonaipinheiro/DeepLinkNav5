import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Routes
import DrawerNav from './drawerNavigator';

const RootStack = createStackNavigator();

function Root() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Root" component={DrawerNav} />
    </RootStack.Navigator>
  );
}

export default Root;
