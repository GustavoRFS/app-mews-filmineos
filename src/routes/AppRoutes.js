import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/Header';
import Drawer from './Drawer';
import MovieInfo from '../views/MovieInfo';
import SearchMovie from '../views/SearchMovie';
import {AppDataProvider} from '../contexts/AppData';

const Stack = createStackNavigator();

export default () => {
  return (
    <AppDataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MoviesTabs">
          <Stack.Screen
            name="MoviesTabs"
            component={Drawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MovieInfo"
            component={MovieInfo}
            options={Header}
          />
          <Stack.Screen
            name="SearchMovie"
            component={SearchMovie}
            options={Header}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppDataProvider>
  );
};
