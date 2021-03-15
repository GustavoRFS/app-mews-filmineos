import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {AuthProvider} from '../contexts/Auth';
import CurrentRoute from './CurrentRoute';

const Routes = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1e1e1e'}}>
      <StatusBar backgroundColor="#0b0b0b" barStyle="light-content"></StatusBar>
      <AuthProvider>
        <CurrentRoute />
      </AuthProvider>
    </SafeAreaView>
  );
};

export default Routes;
