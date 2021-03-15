import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../api/api';
import Toast from 'react-native-simple-toast';

const AuthContext = createContext({
  isSigned: false,
  signIn: undefined,
  signOut: undefined,
});

export default AuthContext;

export const AuthProvider = ({children}) => {
  const [isSigned, setSignedState] = useState(false);
  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem('token').catch((err) => {
        Toast.show(JSON.stringify(err));
      });

      if (storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setSignedState(true);
      }
    }
    loadStorageData();
  });

  async function signIn(email, password) {
    api
      .post('/auth/login', {email, password})
      .then(async (response) => {
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        AsyncStorage.setItem('token', response.data.token)
          .then(() => {
            setSignedState(true);
          })
          .catch((err) => {
            Toast.show(JSON.stringify(err));
          });
      })
      .catch((err) => {
        if (err.response.data) {
          Toast.show(err.response.data.error);
        } else {
          Toast.show('Grrr algo deu errado ô :c');
        }
      });
  }
  async function signOut() {
    await AsyncStorage.clear().catch((err) => {
      Toast.show(JSON.stringify(err));
    });
    api.defaults.headers.Authorization = undefined;
    setSignedState(false);
  }

  return (
    <AuthContext.Provider value={{isSigned, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
