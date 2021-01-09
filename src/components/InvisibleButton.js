import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

export default (props) => {
  return (
    <TouchableHighlight style={{ width: "60%" }} onPress={props.onPress}>
      <View
        style={{
          borderColor: "#f1f1f1",
          borderWidth: 2,
          borderRadius: 5,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: 5,
        }}
      >
        <Text
          style={{
            color: "#f1f1f1",
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          {props.text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
