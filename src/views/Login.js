import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TextInput from "../components/TextInput";

const styles = StyleSheet.create({
  image: {
    marginTop: 60,
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  form: {
    marginTop: 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: 360,
    height: 250,
    alignSelf: "center",
    justifyContent: "space-between",
  },
  register: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1e1e1e" }}>
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={styles.image}
          source={require("../assets/Netflix_icon.png")}
        />
        <View style={styles.form}>
          <TextInput placeholder="Email" />
          <TextInput placeholder="Senha" />
          <View style={{ alignSelf: "center", width: 100 }}>
            <Button title="Entrar" color="#bf2f2f" />
          </View>
          <View style={styles.register}>
            <Text style={{ color: "#fafafa" }}>Ainda não é cadastradx? </Text>
            <TouchableOpacity onPress={() => console.warn("Cadastrar")}>
              <Text
                style={{
                  textDecorationStyle: "solid",
                  textDecorationLine: "underline",
                  color: "#fafafa",
                }}
              >
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
