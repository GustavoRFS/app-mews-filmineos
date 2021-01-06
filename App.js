/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MoviesList from './src/views/MoviesList';

const App = () => {
  return (
    <View style={{height: '100%', backgroundColor: '#1e1e1e'}}>
      <MoviesList></MoviesList>
    </View>
  );
};

export default App;
