import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screen/public/SignInScreen';
import SignUpScreen from './screen/public/SignUpScreen';
import * as React from 'react';

const Stack = createStackNavigator();

function AuthScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

const App = function () {
  const DarkTheme = {
    dark: true,
    colors: {
      text: '#FFFFFF',
      primary: '#231E1E',
      notification: '#231E1E',
      background: '#231E1E',
      border: '#231E1E',
      card: '#231E1E'
    }
  };

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
