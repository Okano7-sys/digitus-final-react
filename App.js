import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro1 from './screens/intro1.js';
import Intro2 from './screens/intro2.js';
import Intro3 from './screens/intro3.js';
import Home from './screens/home.js';
import Details from './screens/details'
import mockdata from './mockdata/mockdata'
import LoginScreen from './screens/LoginScreen';
import { UserProvider } from './context/UserContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Intro1" component={Intro1} options={{ headerShown: false }} />
          <Stack.Screen name="Intro2" component={Intro2} options={{ headerShown: false }} />
          <Stack.Screen name="Intro3" component={Intro3} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
