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
    height: 250,
    alignSelf: 'center',
    justifyContent: 'space-between',
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
            <Text style={{color: '#fafafa', textAlign: 'center', fontSize: 16}}>
              Perde a senha não ô! Coloca o seu email preu te ajudá ô
            </Text>
            <TextInput placeholder="Email" />
            <View style={{alignSelf: 'center', width: 200}}>
              <Button
                title="Recuperar senha"
                color="#bf2f2f"
                onPress={() => props.navigation.pop()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
