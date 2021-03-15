import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MoviesList from '../views/MoviesList';
import Icon from 'react-native-vector-icons/FontAwesome';
import AllMovies from '../views/AllMovies';

const Tab = createMaterialBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="MoviesSections"
      activeColor="#bf2f2f"
      inactiveColor="#afafaf"
      barStyle={{backgroundColor: '#0b0b0b'}}
      shifting={true}>
      <Tab.Screen
        name="MoviesSections"
        component={MoviesList}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="AllMovies"
        options={{
          tabBarLabel: 'Todos os filmes',
          tabBarIcon: ({color}) => (
            <Icon name="list" color={color} size={20}></Icon>
          ),
        }}
        component={AllMovies}
      />
    </Tab.Navigator>
  );
};
