import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer from './Drawer';
import MovieInfo from '../views/MovieInfo';
import Login from '../views/Login';
import AddMovie from '../views/SearchMovie';
import Register from '../views/Register';
import ForgotPassword from '../views/ForgotPassword';

const Stack = createStackNavigator();

export default (props) => {
  const headerOptions = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#0b0b0b',
    },
    headerTitle: () => {
      return (
        <Image
          source={require('../assets/Netflix_icon.png')}
          style={{width: 40, height: 40}}></Image>
      );
    },
    headerTintColor: '#fff',
  };

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={headerOptions}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={headerOptions}
      />

      <Stack.Screen
        name="MoviesTabs"
        component={Drawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MovieInfo"
        component={MovieInfo}
        options={headerOptions}
      />
      <Stack.Screen
        name="AddMovie"
        component={AddMovie}
        options={headerOptions}
      />
    </Stack.Navigator>
  );
};
