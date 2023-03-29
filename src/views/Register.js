import React, { useContext, useState } from "react";
import { View, ScrollView, StyleSheet, Image, Button } from "react-native";
import TextInput from "../components/TextInput";
import AuthContext from "../contexts/Auth";
import LoadingModal from "../components/LoadingModal";

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  form: {
    marginTop: 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: 360,
    height: 350,
    alignSelf: "center",
    justifyContent: "space-between",
  },
  whoYouAre: { color: "#fafafa", fontSize: 16 },
});

export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPassConfirm] = useState();
  const [isLoading, setLoading] = useState(false);

  const [name, setName] = useState(null);

  const { showMessage } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, backgroundColor: "#1e1e1e" }}>
      <LoadingModal visible={isLoading} />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderRadius: 20,
            alignSelf: "center",
            backgroundColor: "#0b0b0b",
            justifyContent: "center",
            width: 180,
            height: 180,
          }}
        >
          <Image style={styles.image} source={require("../assets/icon.png")} />
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            placeholder="Senha"
            onChangeText={(text) => {
              setPassword(text);
            }}
            secureTextEntry={true}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Confirmação da Senha"
            onChangeText={(text) => {
              setPassConfirm(text);
            }}
          />

          <View style={{ width: 120, alignSelf: "center", zIndex: -1 }}>
            <Button
              title="Cadastrar"
              color="#bf2f2f"
              onPress={() => {
                if (!name) {
                  showMessage("Selecione quem é você");
                } else if (!email || !email.trim()) {
                  showMessage("Insira seu email");
                } else if (!password) {
                  showMessage("Insira sua senha");
                } else if (!passwordConfirmation) {
                  showMessage("Confirme sua senha");
                } else {
                  if (password === passwordConfirmation) {
                  } else {
                    showMessage("As senhas não são identicas");
                  }
                }
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
