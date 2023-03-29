import React, { useState, useContext } from "react";
import AuthContext from "../contexts/Auth";
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
    height: 260,
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
  const context = useContext(AuthContext);

  const [isLoading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#1e1e1e" }}>
      <LoadingModal visible={isLoading} />
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center" }}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              borderRadius: 20,
              width: 180,
              height: 180,
              backgroundColor: "#0b0b0b",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/icon.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              placeholder="Email"
              onChangeText={(text) => {
                setEmail(text);
              }}
              returnKeyType="next"
            />
            <TextInput
              placeholder="Senha"
              onChangeText={(text) => {
                setPassword(text);
              }}
              secureTextEntry={true}
            />
            <View style={{ alignSelf: "center", width: 100 }}>
              <Button
                title="Entrar"
                color="#bf2f2f"
                onPress={async () => {
                  // if (!email || !email.trim()) {
                  //   context.showMessage("Insira seu email");
                  // } else if (!password) {
                  //   context.showMessage("Insira sua senha");
                  // } else {
                  setLoading(true);
                  await context.signIn(email, password);
                  setLoading(false);
                  // }
                }}
              />
            </View>
            <View style={styles.register}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Register")}
              >
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
        </View>
      </ScrollView>
    </View>
  );
};
