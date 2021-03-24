import React, { useState, useContext } from "react";
import { StyleSheet, Modal, View, Text, Button } from "react-native";
import LoadingModal from "./LoadingModal";
import TextInput from "./TextInput";
import AppDataContext from "../contexts/AppData";
import api from "../api/api";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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
  const { refreshData, showMessage } = useContext(AppDataContext);
  const [url, setUrl] = useState("");
  const [isLoading, setLoading] = useState(false);

  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.text}>Insira a url da nova imagem</Text>
          <View style={{ width: 228, marginBottom: 20 }}>
            <TextInput
              onChangeText={(text) => {
                setUrl(text);
              }}
              placeholder="Url da Imagem"
              returnKeyType="done"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={{ marginRight: 40 }}>
              <Button
                title="Cancelar"
                color="#bf2f2f"
                onPress={props.onRequestClose}
              />
            </View>
            <View>
              <Button
                title="Alterar"
                color="#bf2f2f"
                onPress={() => {
                  setLoading(true);
                  api
                    .put("/auth/image", { profilePic: url })
                    .then(async () => {
                      await refreshData();
                      setLoading(false);
                      props.onRequestClose();
                    })
                    .catch((err) => {
                      if (err.response.data) {
                        showMessage(err.response.data.error);
                      } else {
                        showMessage(err.response.data.error);
                      }
                      setLoading(false);
                    });
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <LoadingModal visible={isLoading} />
    </Modal>
  );
};
