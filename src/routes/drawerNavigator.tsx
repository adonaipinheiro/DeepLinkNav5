import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Routes
import LogOn from '../screens/LogOn';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={LogOn} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
