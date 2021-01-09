import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Stack";

const Routes = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1e1e1e" }}>
      <StatusBar backgroundColor="#0b0b0b" barStyle="light-content"></StatusBar>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Routes;
