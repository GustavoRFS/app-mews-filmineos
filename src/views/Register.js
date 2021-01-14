import React from 'react';
import {View, ScrollView, StyleSheet, Image, Text, Button} from 'react-native';
import TextInput from '../components/TextInput';
import Picker from 'react-native-dropdown-picker';

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
    height: 350,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  whoYouAre: {color: '#fafafa', fontSize: 16},
});

export default (props) => {
  var name = null;
  return (
    <View style={{flex: 1, backgroundColor: '#1e1e1e'}}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Image
          style={styles.image}
          source={require('../assets/Netflix_icon.png')}
        />
        <View style={styles.form}>
          <TextInput placeholder="Email" />
          <TextInput placeholder="Senha" />
          <TextInput placeholder="Confirmação da Senha" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.whoYouAre}>Você é </Text>
            <Picker
              containerStyle={{
                width: 130,
                height: 30,
              }}
              arrowColor="#fafafa"
              dropDownStyle={{backgroundColor: '#2f2f2f'}}
              labelStyle={{color: '#fafafa'}}
              style={{backgroundColor: '#1e1e1e'}}
              defaultValue={name}
              placeholder="Selecione"
              onChangeItem={(item) => {
                name = item.value;
                console.warn(name);
              }}
              items={[
                {label: 'a Bururu', value: 'bururu'},
                {label: 'o Gururu', value: 'gururu'},
              ]}
            />
          </View>
          <View style={{width: 120, alignSelf: 'center', zIndex: -1}}>
            <Button
              title="Cadastrar"
              color="#bf2f2f"
              onPress={() => props.navigation.pop()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
