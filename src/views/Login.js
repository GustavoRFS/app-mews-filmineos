import React, {useContext} from 'react';
import AuthContext from '../contexts/Auth';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TextInput from '../components/TextInput';
import Toast from 'react-native-simple-toast';

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  form: {
    marginTop: 40,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: 360,
    height: 260,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  register: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default (props) => {
  const context = useContext(AuthContext);
  var email, password;
  return (
    <View style={{flex: 1, backgroundColor: '#1e1e1e'}}>
      <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              borderRadius: 20,
              width: 180,
              height: 180,
              backgroundColor: '#0b0b0b',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/icon.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              placeholder="Email"
              onChangeText={(text) => {
                email = text;
              }}
              returnKeyType="next"
            />
            <TextInput
              placeholder="Senha"
              onChangeText={(text) => {
                password = text;
              }}
              secureTextEntry={true}
            />
            <View style={{alignSelf: 'center', width: 100}}>
              <Button
                title="Entrar"
                color="#bf2f2f"
                onPress={() => {
                  if (!email || !email.trim()) {
                    Toast.show('Insira seu email');
                  } else if (!password) {
                    Toast.show('Insira sua senha');
                  } else {
                    context.signIn(email, password);
                  }
                }}
              />
            </View>
            <View style={styles.register}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Register')}>
                <Text
                  style={{
                    textDecorationStyle: 'solid',
                    textDecorationLine: 'underline',
                    color: '#fafafa',
                  }}>
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
