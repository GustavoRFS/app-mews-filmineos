import React, { createContext, useEffect, useState } from "react";
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

  function showMessage(text) {
    setMessage(text);
    setSnackVisibility(true);
  }

  function signIn(email, password) {
    setSignedState(true);
  }
  async function signOut() {
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
