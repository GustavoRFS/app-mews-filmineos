import React from 'react';
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
    height: 300,
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
  return (
    <View style={{flex: 1, backgroundColor: '#1e1e1e'}}>
      <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center'}}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/Netflix_icon.png')}
          />
          <View style={styles.form}>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Senha" />
            <View style={{alignSelf: 'center', width: 100}}>
              <Button
                title="Entrar"
                color="#bf2f2f"
                onPress={() => props.navigation.navigate('MoviesTabs')}
              />
            </View>
            <View style={styles.register}>
              <Text style={{color: '#fafafa'}}>Ainda não é cadastradx? </Text>
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
            <View style={styles.register}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('ForgotPassword')}>
                <Text
                  style={{
                    textDecorationStyle: 'solid',
                    textDecorationLine: 'underline',
                    color: '#fafafa',
                  }}>
                  Esqueceu sua senha?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
