import React from 'react';
import {Image} from 'react-native';

export default {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#0b0b0b',
  },
  headerTitle: () => {
    return (
      <Image
        source={require('../assets/icon05x.png')}
        style={{width: 35, height: 35}}></Image>
    );
  },
  headerTintColor: '#fff',
};
