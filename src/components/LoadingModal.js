import React from 'react';
import {StyleSheet, Modal, View, ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});

export default (props) => {
  return (
    <Modal animationType="slide" visible={props.visible} transparent={true}>
      <View style={styles.centeredView}>
        <ActivityIndicator animating={true} color="#bf2f2f" size="large" />
      </View>
    </Modal>
  );
};
