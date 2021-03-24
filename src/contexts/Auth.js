import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api/api";
import { Snackbar } from "react-native-paper";

const AuthContext = createContext({
  isSigned: false,
  signIn: undefined,
  signOut: undefined,
  showMessage: undefined,
});

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [isSigned, setSignedState] = useState(false);
  const [message, setMessage] = useState("");
  const [snackVisibility, setSnackVisibility] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem("token");

      if (storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setSignedState(true);
      }
    }
    loadStorageData();
  });

  function showMessage(text) {
    setMessage(text);
    setSnackVisibility(true);
  }

  function signIn(email, password) {
    return api
      .post("/auth/login", { email, password })
      .then(async (response) => {
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        AsyncStorage.setItem("token", response.data.token).then(() => {
          setSignedState(true);
        });
      })
      .catch((err) => {
        if (err.response.data) {
          showMessage(err.response.data.error);
        } else {
          showMessage("Grrr algo deu errado ô :c");
        }
      });
  }
  async function signOut() {
    await AsyncStorage.clear();
    api.defaults.headers.Authorization = undefined;
    setSignedState(false);
  }

  return (
    <AuthContext.Provider value={{ isSigned, signIn, signOut, showMessage }}>
      <Snackbar
        visible={snackVisibility}
        onDismiss={() => setSnackVisibility(false)}
        duration={2000}
        style={{ backgroundColor: "#3f3f3f" }}
      >
        {message}
      </Snackbar>
      {children}
    </AuthContext.Provider>
  );
};
