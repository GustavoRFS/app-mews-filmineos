import React from "react";
import { View, Text } from "react-native";
import Swipeout from "react-native-swipeout";

var swipeoutBtns = [
  {
    text: "Button",
  },
];

export default () => {
  return (
    <Swipeout right={swipeoutBtns}>
      <View>
        <Text>Swipe me left</Text>
      </View>
    </Swipeout>
  );
};
