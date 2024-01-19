import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, TouchableOpacity, View } from 'react-native';
import MainLogin from './Screens/MainLogin';
import Login from './Screens/Login';
import GuestLogin from './Screens/GuestLogin';
import QueryForm from './Screens/QueryForm';
import Status from './Screens/Status';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Mainlogin" component={MainLogin} options={{
          title: '', headerStyle: { backgroundColor: '#040c1c' },
          
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          title: '', headerStyle: { backgroundColor: '#040c1c' },
          headerTintColor: '#2ba5be',
          headerTitleStyle: {
            textAlign: 'center',
            left: 100
          }
        }} />
        <Stack.Screen name="GuestLogin" component={GuestLogin} options={{
          title: '', headerStyle: { backgroundColor: '#040c1c' }, headerTintColor: '#2ba5be',
          headerTitleStyle: {
            textAlign: 'center',
            left: 70,
          },
          
        }} />
        <Stack.Screen name="QueryForm" component={QueryForm} options={{
          title: 'QUERY FORM', headerStyle: { backgroundColor: '#040c1c' }, headerTintColor: '#2ba5be',
          headerTitleStyle: {
            textAlign: 'center',
            left: 80
          }
        }} />
        <Stack.Screen name="Status" component={Status} options={{
          title: 'STATUS', headerStyle: { backgroundColor: '#040c1c' }, headerTintColor: '#2ba5be',
          headerTitleStyle: {
            textAlign: 'center',
            left: 80
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
