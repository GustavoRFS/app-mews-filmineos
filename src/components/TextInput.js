import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default (props) => {
  const styles = StyleSheet.create({
    textInput: {
      borderColor: props.borderColor || '#afafaf',
      borderWidth: props.borderWidth || 1,
      borderRadius: props.borderRadius || 8,
      paddingHorizontal: props.paddingHorizontal || 14,
      color: props.color || '#fff',
    },
  });
  return (
    <TextInput
      onChangeText={props.onChangeText}
      selectionColor={props.color || '#fff'}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor || '#afafaf'}
      style={styles.textInput}
      returnKeyType={props.returnKeyType}
      onSubmitEditing={props.onSubmitEditing}
      secureTextEntry={props.secureTextEntry}
    />
  );
};
