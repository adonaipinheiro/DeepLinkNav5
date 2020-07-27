import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStack from './routes/_rootNavigator';

function Routes() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default Routes;
