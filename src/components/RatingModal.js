import React, { useState } from "react";
import { StyleSheet, Modal, View, Text, Button } from "react-native";
import RatingStars from "./RatingStars";
import Slider from "@react-native-community/slider";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 60,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    marginTop: 20,
    width: 120,
  },
});

export default (props) => {
  const [ratingValue, setRatingValue] = useState(0);
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.text}> Deixe sua avaliação</Text>
          <View style={{ width: 200, transform: [{ translateY: 25 }] }}>
            <Slider
              style={{ opacity: 0 }}
              minimumValue={0}
              maximumValue={10}
              value={0}
              onValueChange={(value) => setRatingValue(value.toFixed(1))}
            />
          </View>

          <RatingStars width={32} ratingValue={ratingValue} />
          <Text style={{ marginTop: 18, fontSize: 18, color: "#fff" }}>
            {ratingValue}
          </Text>
          <View style={styles.button}>
            <Button
              title="Confirmar"
              color="#bf2f2f"
              onPress={props.onSubmit}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};
