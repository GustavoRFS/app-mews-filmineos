import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default (props) => {
  const styles = StyleSheet.create({
    textInput: {
      backgroundColor: "#1e1e1e",
    },
  });
  return (
    <TextInput
      onChangeText={props.onChangeText}
      selectionColor={props.color || "#fff"}
      label={props.placeholder}
      mode="outlined"
      theme={{
        colors: {
          placeholder: props.placeholderTextColor || "#afafaf",
          text: props.color || "#fff",
          primary: "#bf2f2f",
        },
      }}
      style={styles.textInput}
      returnKeyType={props.returnKeyType}
      onSubmitEditing={props.onSubmitEditing}
      secureTextEntry={props.secureTextEntry}
    />
  );
};
